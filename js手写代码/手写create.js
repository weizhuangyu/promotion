Object.create = function (obj) {
	const fun = function () {};
	fun.prototype = obj;
	return new fun();
}
