function throttle(fun, delay) {
	let timer = null;

	return function (...args) {

		const context = this;

		if (timer) {
			return null
		}

		timer = setTimeout(function () {
			fun.apply(context, args);
			timer = null;
		}, delay);
	}
}
