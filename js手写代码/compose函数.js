/**
 * 1. 实现一个函数，composeFunction(fn1, fn2, fn3)，按照fn1(fn2(fn3()))顺序执行
 * 例如：
 * const add = (x) => x + 1
 * const multiply = (x , y) => x * y
 * const function1 = composeFunction(add, multiply)
 * function1(3, 4) // 输出结果13
 */

/**
 * 实现compose函数
 * @param funs
 */

function composeFunction(...funs) {
	if (funs.length === 0) {
		return (...args) => args
	}
	return funs.reduce((pre, next) => (...args) => pre(next(...args)))
}
const add = (x) => x + 1
const multiply = (x , y) => x * y

const pow = (x) => x * x
const function1 = composeFunction(pow, add, multiply)
console.log(function1(3, 4)) // 输出结果13

