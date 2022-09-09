/**
 *
 * @param {*} array 深层嵌套的数据
 * @returns array 新数组
 */
const flatten = (array) => {
	return array.reduce((pre, next) => {
		if (!Array.isArray(next)) {
			pre.push(next);
		} else {
			pre = pre.concat(flatten(next));
		}

		return pre;
	}, [])
}

// 测试
const arr1 = [
	1,
	[ 2, 3, 4 ],
	[ 5, [ 6, [ 7, [ 8 ] ] ] ]
]
console.log(flatten(arr1))
