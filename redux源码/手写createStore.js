export default function createStore(reducer, defaultState) {
	// 简单验证 reducer 是不是一个函数
	if (typeof reducer !== 'function') {
		throw new TypeError(`The first parameter reducer must be a function`)
	}

	let currentReducer = reducer // 当前使用的 reducer
	let currentState = defaultState // 当前状态值
	const subscribers = [] // 监听器数组

	function dispatch(action) {
		// 验证 action 类型
		if (!_isPlainObject(action)) {
			throw new TypeError(`The required parameter action must be a "Plain Object"`)
		}
		if (action.type === undefined) {
			throw new TypeError(`The required parameter action must have a property of "type"`)
		}
		currentState = currentReducer(currentState, action)
		// 执行所有的监听器
		subscribers.forEach(subscriber => {
			subscriber()
		})
	}

	function getState() {
		return currentState
	}

	// 添加监听器
	function subscribe(subscriber) {
		subscribers.push(subscriber)
		let isRemoved = false // 判定是否已移除
		return () => {
			if (isRemoved) return
			const index = subscribers.indexOf(subscriber)
			subscribers.splice(index, 1)
			isRemoved = true
		}
	}

	function replaceReducer(newReducer) {
		// 简单验证 reducer 是不是一个函数
		if (typeof newReducer !== 'function') {
			throw new TypeError(`The first parameter reducer must be a function`)
		}
		currentReducer = newReducer
	}

	// 创建仓库时，需要调用一次 dispatch 分发 action，完成状态初始化
	dispatch({
		type: `@@redux/INIT${_getRandomStr(7)}`
	})

	return {
		dispatch,
		getState,
		subscribe,
		replaceReducer
	}
}
