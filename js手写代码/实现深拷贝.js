const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const numberTag = '[object Number]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const errorTag = '[object Error]'
const regexpTag = '[object RegExp]'
const funcTag = '[object Function]'

function getType(target) {
	return Object.prototype.toString.call(target)
}

function cloneSymbol(target) {
	return Object(Symbol.prototype.valueOf.call(target))
}

function cloneReg(target) {
	const reFlags = /\w*$/
	const result = new target.constructor(target.source, reFlags.exec(target))
	result.lastIndex = target.lastIndex
	return result
}

function cloneFunction(func) {
	const bodyReg = /(?<={)(.|\n)*(?=})/m
	const paramReg = /(?<=\().*(?=\)\s*{)/
	const funcString = func.toString()
	if (func.prototype) {
		const param = paramReg.exec(funcString)
		const body = bodyReg.exec(funcString)
		if (body) {
			if (param) {
				const paramArr = param[0].split(',')
				return new Function(...paramArr, body[0])
			} else {
				return new Function(body[0])
			}
		} else {
			return null
		}
	} else {
		return eval(funcString)
	}
}

function cloneOtherType(target, type) {
	switch (type) {
		case boolTag:
		case numberTag:
		case stringTag:
			return target
		case errorTag:
		case dateTag:
			return new target.constructor(target)
		case regexpTag:
			return cloneReg(target)
		case symbolTag:
			return cloneSymbol(target)
		case funcTag:
			return cloneFunction(target)
		default:
			return null
	}
}

function clone(target, map = new WeakMap()) {
	// 初始化
	const type = getType(target)
	let cloneTarget
	if ([arrayTag, objectTag].includes(type)) {
		cloneTarget = new target.constructor()
	} else {
		return cloneOtherType(target, type)
	}

	// 防止循环引用
	if (map.get(target)) {
		return map.get(target)
	}
	map.set(target, cloneTarget)

	// 克隆对象和数组
	cloneTarget = Array.isArray(target) ? [] : {};
	for (let key in target) {
		if (target.hasOwnProperty(key)) {
			cloneTarget[key] = typeof target[key] === 'object' ? clone(target[key]) : target[key];
		}
	}
	return cloneTarget;

}

var a = {
	a: 10,
	b: {
		a: 20
	}
}

console.log(clone(a))


// // 深拷贝简化版
// function cloneDeep(obj) {
// 	if (typeof obj !== 'object') {
// 		return obj
// 	}
// 	const newObj = Array.isArray(obj) ? [] : {};
// 	for (let key in obj) {
// 		if (obj.hasOwnProperty(key)) {
// 			newObj[key] = typeof obj[key] === 'object' ? cloneDeep(obj[key]) : obj[key];
// 		}
// 	}
// 	return newObj;
// }
