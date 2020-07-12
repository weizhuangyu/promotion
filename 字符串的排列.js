/**
 * @param {string} s
 * @return {string[]}
 */

function combine(arr, str, result) {
	const length = arr.length
	if (length === 1) {
		const ans = str.concat(arr[0])
		if (ans && !result.includes(ans)) result.push(ans)
	}
	for (let i = 0; i < length; i++) {
		const temp = arr.slice()
		const middle = str.slice()
		str = str.concat(temp.splice(i, 1))
		combine(temp, str, result)
		str = middle
	}
}
var permute = function(sArr) {
	const resultArr = []
	combine(sArr, [], resultArr)
	return resultArr
}

console.log(permute(['a', 'b', 'c']))