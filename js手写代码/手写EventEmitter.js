class EventEmitter {
	cache = {};

	on(type, fun) {
		if (!this.cache[type]) {
			this.cache[type] = [];
		}
		this.cache[type].push(fun);
	}

	emit(type, ...args) {
		if (this.cache[type] && this.cache[type].length) {
			this.cache[type].forEach((fn) => {
				fn(...args);
			})
		}
	}

	off(type, listener) {
		if (!listener) {
			delete this.cache[type]
		} else {
			const index = this.cache[type].findIndex((item) => item === listener);
			this.cache[type].splice(index, 1);
		}
	}

	once(type, listener) {
		const innerListener = (...args) => {
			listener(...args);
			this.off(type, innerListener);
		}
		this.on(type, innerListener);
	}

}

// 运行示例
let event = new EventEmitter();

event.on('say',function(str) {
	console.log(str);
});

const say1 = (str) => {
	console.log(str);
}

event.on('say1', say1);

event.off('say1', say1);

event.once('say', function(str) {
	console.log('这是once1:' + str)
})

event.emit('say','visa');
event.emit('say1','visa111');
event.emit('say','visa222');
event.emit('say','visa333');
