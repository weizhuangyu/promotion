// class Promise {
// 	constructor(executor) {
// 		this.state = 'pending'
// 		this.value = undefined
// 		this.reason = undefined
// 		this.onResolvedCallbacks = []
// 		this.onRejectedCallbacks = []
// 		const resolve = (value) => {
// 			if (this.state === 'pending') {
// 				this.state = 'fulfilled'
// 				this.value = value
// 				this.onResolvedCallbacks.forEach((fn) => fn())
// 			}
// 		}
// 		const reject = (reason) => {
// 			if (this.state === 'pending') {
// 				this.state = 'rejected'
// 				this.reason = reason
// 				this.onRejectedCallbacks.forEach((fn) => fn())
// 			}
// 		}
// 		try{
// 			executor(resolve, reject)
// 		} catch (err) {
// 			reject(err)
// 		}
// 	}
//
// 	then(onFulfilled, onRejected) {
// 		onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
// 		onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
// 		const self = this
// 		return new Promise(function (resolve, reject) {
// 			if (self.state === 'fulfilled') {
// 				setTimeout(function() {
// 					try {
// 						let x = onFulfilled(self.value)
// 						resolvePromise(x, resolve, reject)
// 					} catch (e) {
// 						reject(e)
// 					}
// 				}, 0)
// 			}
// 			if (self.state === 'rejected') {
// 				setTimeout(function() {
// 					try {
// 						let x = onRejected(self.reason)
// 						resolvePromise(x, resolve, reject)
// 					} catch (e) {
// 						reject(e)
// 					}
// 				}, 0)
// 			}
// 			if (self.state === 'pending') {
// 				self.onResolvedCallbacks.push(() => {
// 					setTimeout(() => {
// 						try {
// 							let x = onFulfilled(self.value)
// 							resolvePromise(x, resolve, reject)
// 						} catch (e) {
// 							reject(e)
// 						}
// 					}, 0)
// 				})
// 				self.onRejectedCallbacks.push(() => {
// 					setTimeout(() => {
// 						try {
// 							let x = onRejected(self.reason)
// 							resolvePromise(x, resolve, reject)
// 						} catch (e) {
// 							reject(e)
// 						}
// 					}, 0)
// 				})
// 			}
// 		})
// 	}
// 	catch(fn){
// 		return this.then(null,fn)
// 	}
// }
// function resolvePromise(x, resolve, reject){
// 	if (typeof x === 'object' || typeof x === 'function') {
// 		try {
// 			if (typeof x.then === 'function') {
// 				// 精髓，then可以无限嵌套
// 				x.then.call(x, y => {
// 					resolvePromise(y, resolve, reject)
// 				}, err => {
// 					reject(err)
// 				})
// 			} else {
// 				resolve(x)
// 			}
// 		} catch (e) {
// 			reject(e)
// 		}
// 	} else {
// 		resolve(x)
// 	}
// }
//
// new Promise(function (resolve, reject) {
// 	console.log('start')
// 	resolve('data2')
// })
// 	.then(
// 	(val) => {
// 		console.log('data---', val)
// 		return val
// 	},
// 	(v) => {
// 		console.log('error1 ' + v)
// 	})
// 	.then(
// 	(v) => {
// 		console.log('success2 ' + v)
// 	},
// 	(v) => {
// 		console.log('error2 ' + v)
// 	})
// console.log('end')


