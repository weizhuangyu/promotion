function curry(fn, params) {
	const length = fn.length
	params = params || []
	return function (...args) {
		params.push(...args)
		if (params.length < length) {
			return curry(fn, params)
		} else {
			return fn(...params)
		}
	}
}

const add = curry(function (a, b, c) {
	return a + b + c
})

console.log(add()()(1, 2, 3))