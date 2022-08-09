/**
 * 去抖动
 * @param fn
 * @param delay
 * @returns {function(...[*]=)}
 */
function debounce(fn, delay, immediate) {
	let timer;

	return function (...args) {
		const context = this;

		if (timer) {
			clearTimeout(timer);
		}

		if (immediate) {
			if (!timer) {
				fn.apply(context, args);
			}
			timer = setTimeout(() => {
				timer = null;
			}, delay);
		} else {
			timer = setTimeout(() => {
				fn.apply(context, args);
			}, delay);
		}
	}
}
