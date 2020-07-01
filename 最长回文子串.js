/**
 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
	let maxString = ''
	for (let i = 0; i < s.length; i++) {
		const result1 = longestLength(s, i, i)
		const result2 = longestLength(s, i, i + 1)
		const maxTwoString = result1.length >= result2.length ? result1 : result2
		maxString = maxTwoString.length >= maxString.length ? maxTwoString : maxString
	}
	return maxString
};

function longestLength(s, left, right) {
	let result = ''
	if (left < 0 || right > s.length) {
		return result
	}
	while (left >= 0 && right < s.length) {
		if (s.charAt(left) !== s.charAt(right)) {
			result = s.substring(left + 1, right)
			break
		}
		left--
		right++
	}

	if (left < 0 && right < s.length) {
		result = s.substring(0, right)
	}
	if (right >= s.length && left >= 0) {
		result = s.substring(left + 1, s.length)
	}
	if (left < 0 && right >= s.length) {
		result = s.substring(0, s.length)
	}
	return result
}

console.log(longestPalindrome('a'))

