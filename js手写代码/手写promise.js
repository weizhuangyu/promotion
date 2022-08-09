const STATUS = {
	PENDING: 'PENDING',
	RESOLVED: 'RESOLVED',
	REJECT: 'REJECT',
}

class Promise {
	constructor(executor) {
		this.state = STATUS.PENDING;
		this.reason = null;
		this.value = null;
		this.resolvedCallbackPool = [];
		this.rejectedCallbackPool = [];

		const resolve = (value) => {
			if (this.state === STATUS.PENDING) {
				this.state = STATUS.RESOLVED;
				this.value = value;
				this.resolvedCallbackPool.forEach((fn) => fn());
			}
		}

		const reject = (reason) => {
			if (this.state === STATUS.PENDING) {
				this.state = STATUS.REJECT;
				this.reason = reason;
				this.rejectedCallbackPool.forEach((fn) => fn());
			}
		}

		try {
			executor(resolve, reject);
		} catch (e) {
			reject(e);
		}
	}

	then = (onFulFilled, onReject) => {
		onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : (value) => value;
		onReject = typeof onReject === 'function' ? onReject : (value) => value;

		return new Promise((resolve, reject) => {
			if (this.state === STATUS.RESOLVED) {
				setTimeout(() => {
					try {
						const x = onFulFilled(this.value);
						resolvePromise(x, resolve, reject)
					} catch (e) {
						reject(e);
					}
				}, 0)
			}

			if (this.state === STATUS.REJECT) {
				setTimeout(() => {
					try {
						const x = onReject(this.reason);
						resolvePromise(x, resolve, reject)
					} catch (e) {
						reject(e);
					}
				}, 0)
			}

			if (this.state === STATUS.PENDING) {
				this.resolvedCallbackPool.push(() => {
					setTimeout(() => {
						try {
							const x = onFulFilled(this.value);
							resolvePromise(x, resolve, reject)
						} catch (e) {
							reject(e);
						}
					}, 0)
				})

				this.rejectedCallbackPool.push(() => {
					setTimeout(() => {
						try {
							const x = onReject(this.reason);
							resolvePromise(x, resolve, reject)
						} catch (e) {
							reject(e);
						}
					}, 0)
				})
			}
		})
	}
}

function resolvePromise(x, resolve, reject) {
	if (x instanceof Promise) {
		try {
			x.then((result) => {
				resolvePromise(result, resolve, reject);
			}, (error) => {
				reject(error);
			})
		} catch (e) {
			reject(e)
		}
	} else {
		resolve(x)
	}
}

new Promise(function (resolve, reject) {
	console.log('start')
	resolve('data2')
})
	.then(
		(val) => {
			console.log('data---', val)
			return new Promise((resolve, reject) => {
				resolve(val + 1)
			})
		},
		(v) => {
			console.log('error1 ' + v)
		})
	.then(
		(v) => {
			console.log('success2 ' + v)
		},
		(v) => {
			console.log('error2 ' + v)
		})
console.log('end')
