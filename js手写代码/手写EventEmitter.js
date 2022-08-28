// class EventEmitter {
// 	constructor() {
// 		this.events = {};
// 	}
// 	on(type, listener, isUnshift) {
// 		// 因为其他的类可能继承自EventEmitter，子类的events可能为空，保证子类必须存在此实例属性
// 		if(this.events[type]) {
// 			if(isUnshift) {
// 				this.events[type].unshift(listener);
// 			} else {
// 				this.events[type].push(listener);
// 			}
// 		} else {
// 			this.events[type] = [listener]
// 		}
//
// 		if(type !== 'newListener') {
// 			// node的EventEmitter模块自带的特殊事件，该事件在添加新事件监听器的时候触发
// 			this.emit('newListener', type);
// 		}
// 	}
// 	emit(type, ...args) {
// 		if(this.events[type]) {
// 			this.events[type].forEach(fn => fn.call(this, ...args));
// 		}
// 	}
// 	// 只绑定一次，然后解绑
// 	once(type, listener) {
// 		const me = this;
// 		function oneTime(...args) {
// 			listener.call(this, ...args);
// 			me.off(type, oneTime);
// 		}
// 		me.on(type, oneTime)
// 	}
// 	off(type, listener) {
// 		if(this.events[type]) {
// 			const index = this.events[type].indexOf(listener);
// 			this.events[type].splice(index, 1);
// 		}
// 	}
// }

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
