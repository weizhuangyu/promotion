function myNew(fun, ...args) {
	const obj = Object.create(fun.prototype);

	const result = fun.apply(obj, args);

	if ((typeof result === 'object' && result !== null) || typeof result === 'function') {
		return result;
	}
	return obj;
}
