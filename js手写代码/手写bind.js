if (!Function.prototype.bind) {
	Function.prototype.bind = function (oThis, ...aArgs) {
		if (typeof this !== "function") {
			throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
		}
		const fToBind = this
		const fNOP = function () {}
		const fBound = function (...args) {
			return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(args));
		}
		if (this.prototype) {
			fNOP.prototype = this.prototype
		}
		fBound.prototype = new fNOP()
		return fBound
	}
}


