Object.create = function (obj) {
	const fun = function () {};
	fun.prototype = obj;
	fun.prototype.constructor = fun;
	return new fun();
}
