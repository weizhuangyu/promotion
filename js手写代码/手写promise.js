const STATUS = {
	PENDING: 'PENDING',
	RESOLVED: 'RESOLVED',
	REJECT: 'REJECT',
}

class MyPromise {
	resolvedCallbacks = [];
	rejectCallbacks = [];
	status = STATUS.PENDING;
	value = null;
	reason = null;

	constructor(execute) {

		const resolve = (value) => {
			if (this.status === STATUS.PENDING) {
				this.status = STATUS.RESOLVED;
				this.value = value;
				this.resolvedCallbacks.forEach((fn) => fn())
			}
		}

		const reject = (reason) => {
			if (this.status === STATUS.PENDING) {
				this.status = STATUS.REJECT;
				this.reason = reason;
				this.rejectCallbacks.forEach((fn) => fn())
			}
		}

		try {
			execute(resolve, reject);
		} catch (e) {
			reject(e);
		}
	}

	then = (onFulFilled = (value) => value, onReject = (reason) => reason) => {
		return new MyPromise((resolve, reject) => {
			const successFn = () => {
				try {
					const res = onFulFilled(this.value);
					res instanceof MyPromise ? res.then(resolve, reject) : resolve(res);
				} catch (e) {
					reject(e)
				}
			}

			const failFn = () => {
				try {
					const res = onReject(this.reason);
					res instanceof MyPromise ? res.then(resolve, reject) : resolve(res);
				} catch (e) {
					reject(e)
				}
			}
			if (this.status === STATUS.PENDING) {
				this.resolvedCallbacks.push(() => setTimeout(successFn, 0));
				this.rejectCallbacks.push(() => setTimeout(failFn, 0));
			}
			if (this.status === STATUS.RESOLVED) {
				setTimeout(successFn, 0)
			}
			if (this.status === STATUS.REJECT) {
				setTimeout(failFn, 0)
			}
		})
	}

	catch = (callback) => {
		return this.then(null, callback);
	}
}

new MyPromise(function (resolve) {
	console.log('start')
	resolve('data2')
})
	.then(
		(val) => {
			console.log('success1 ', val)
			return new MyPromise((resolve, reject) => {
				reject(val + 1)
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
			return new MyPromise((resolve, reject) => {
				resolve(v + 2)
			})
		})
	.then((v) => {
		console.log('success3 ' + v);
	})
console.log('end')
