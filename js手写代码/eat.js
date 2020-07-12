/**
 * 实现一个方法

	a. Hank('hank').sleep(10).eat('dinner')

	输出：
	hello this is hank

	// 等待10s
	wake up after 10s

	eat dinner

	b. Hank('hank')

	hello this is hank

	c. Hank('hank').sleepFirst(10).eat('dinner')

	// 等待10s
	wake up after 10s

	hello this is hank

	eat dinner
 */

class Person {
	constructor(name) {
		this.callbacks = []
		const cb = (callback) => {
			console.log(`hello this is ${name}`)
			callback()
		}
		this.callbacks.push(cb)
		setTimeout(() => this.execute(this.callbacks), 0)
	}

	sleep(time) {
		const cb = (next) => {
			setTimeout(() => {
				next()
			}, time * 1000)
		}
		this.callbacks.push(cb)
		return this
	}

	sleepFirst(time) {
		const cb = (next) => {
			setTimeout(() => {
				next()
			}, time * 1000)
		}
		this.callbacks.unshift(cb)
		return this
	}

	eat(food) {
		const cb = (next) => {
			console.log(`eat ${food}`)
			next()
		}
		this.callbacks.push(cb)
		return this
	}

	execute(callbacks) {
		function dispatch(i) {
			const callback = callbacks[i]
			if (callback) {
				callback(() => dispatch(i + 1))
			}
		}
		dispatch(0)
	}
}

function Hank(name) {
	return new Person(name)
}

Hank('hank').sleep(10).eat('dinner')