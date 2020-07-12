/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

	示例 1:

	输入: "abcabcbb"
	输出: 3
	解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * @param s
 * @returns {number}
 */

// 两次遍历，复杂度较高
var lengthOfLongestSubstring = function(s) {
	const sArray = s.split('')
	const length = sArray.length
	let max = 0
	for(let i = 0; i < length; i++) {
		const tempObj = {}
		for(let j = i; j < length; j++) {
			if (length - i < max) {
				break
			}
			if (!(sArray[j] in tempObj)) {
				tempObj[sArray[j]] = i + 1
			} else {
				max = Math.max(max, Object.keys(tempObj).length)
				break
			}
			if ((j === length - 1)) {
				max = Math.max(max, Object.keys(tempObj).length)
				break
			}
		}
	}
	return max
}

// 滑动窗口解法
var lengthOfLongestSubstring = function(s) {
	let index = 0
	let start = 0
	let max = 0
	const map = new Map()
	while (index < s.length) {
		const value = s.charAt(index)
		if (!map.has(value)) {
			map.set(value, index)
			max = Math.max(map.size, max)
		} else {
			const oldIndex = map.get(value) + 1
			for (let i = start; i < oldIndex; i++) {
				map.delete(s.charAt(i))
			}
			start = oldIndex
			map.set(value, index)
		}
		index++
	}
	return max
};

console.log(lengthOfLongestSubstring('pwwkew'))