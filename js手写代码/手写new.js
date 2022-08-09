function myNew(fun, ...args) {
	const obj = {};

	obj.__proto__ = Object.create(fun.prototype);

	const result = fun.apply(obj, args);

	if (result && (typeof result === 'object' || typeof result === 'function')) {
		return result
	}
	return obj;
}
