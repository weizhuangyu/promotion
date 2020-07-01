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
const lengthOfLongestSubstring = function (s) {
	const length = s.length
	const map = new Map()
	let j = 0, ans = 0, start = 0
	while(j < length) {
		const key = s.charAt(j)
		if (!map.has(key)) {
			map.set(key, j)
			ans = Math.max(map.size, ans)
		} else {
			const end = map.get(key) + 1
			const splits = s.slice(start, end)
			start = end
			for (let k = 0, len = splits.length; k < len; k++) {
				map.delete(splits[k])
			}
			map.set(key, j)
		}
		j++
	}
	return ans
}

console.log(lengthOfLongestSubstring('pwwkew'))