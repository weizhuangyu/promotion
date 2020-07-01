if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis) {
		if (typeof this !== "function") {
			// closest thing possible to the ECMAScript 5 internal IsCallable function
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}
		const aArgs = Array.prototype.slice.call(arguments, 1)
		const fToBind = this
		const fNOP = function () {}
		const fBound = function () {
				return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
			}
		fNOP.prototype = this.prototype
		fBound.prototype = new fNOP()
		return fBound
	}
}

Function.prototype.bind = function (othis) {
	const args = [].slice.call(arguments, 1)
	const fNop = function () {}
	const fToBind = this
	const fBound = function () {
		const self = this instanceof fNop ? this : othis
		return fToBind.apply(self, args.concat([].slice.call(arguments)))
	}
	if (this.prototype) {
		fNop.prototype = this.prototype
	}
	fBound.prototype = new fNop()
	return fBound
}