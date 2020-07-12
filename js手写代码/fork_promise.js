class Promise {
	constructor(exec) {
		this.status = 'pending'
		this.fullFilledCallbacks = []
		this.rejectedCallbacks = []
		this.value = ''
		this.reason = ''
		const resolve = (value) => {
			if (this.status === 'pending') {
				this.status = 'fulfilled'
				this.value = value
				this.fullFilledCallbacks.forEach(fn => fn(value))
			}
		}
		const reject = (reason) => {
			if (this.status === 'pending') {
				this.status = 'rejected'
				this.reason = reason
				this.rejectedCallbacks.forEach(fn => fn(reason))
			}
		}

		try {
			exec(resolve, reject)
		} catch (e) {
			reject(e)
		}
	}

	resolvePromise(x, resolve, reject) {
		if (typeof x === 'function' || typeof x === 'object') {
			try {
				if (typeof x.then === 'function') {
					x.then.call(x, (res) => {
						this.resolvePromise(res, resolve, reject)
					}, err => {
						reject(err)
					})
				} else {
					resolve(x)
				}
			} catch (e) {
				reject(e)
			}
		} else {
			resolve(x)
		}
	}

	then(onFullfilled, onRejected) {
		onFullfilled = onFullfilled ? onFullfilled : value => value
		onRejected = onRejected ? onRejected : reason => reason
		const self = this
		return new Promise((resolve, rejected) => {
			if (self.status === 'fulfilled') {
				setTimeout(() => {
					try {
						const x = onFullfilled(this.value)
						this.resolvePromise(x, resolve, rejected)
					} catch (e) {
						rejected(e)
					}
				})
			}
			if (self.status === 'rejected') {
				setTimeout(() => {
					try {
						const x = onRejected(this.reason)
						this.resolvePromise(x, resolve, rejected)
					} catch (e) {
						rejected(e)
					}
				})
			}
			if (self.status === 'pending') {
				self.fullFilledCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onFullfilled(this.value)
							this.resolvePromise(x, resolve, rejected)
						} catch (e) {
							rejected(e)
						}
					}, 0)
				})
				self.rejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onRejected(this.reason)
							this.resolvePromise(x, resolve, rejected)
						} catch (e) {
							rejected(e)
						}
					}, 0)
				})
			}
		})
	}
	catch(fn){
		return this.then(null,fn)
	}
}

new Promise(function (resolve, reject) {
	console.log('start')
	resolve('data2')
})
	.then(
		(val) => {
			console.log('data---', val)
			return new Promise((resolve) => {
				resolve(val)
			})
		},
		(v) => {
			console.log('error1 ' + v)
		})
	.then(
		(v) => {
			console.log('success2 ' + v)
			return v + 2
		},
		(v) => {
			console.log('error2 ' + v)
		})
console.log('end')