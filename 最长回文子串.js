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
	const length = s.length
	const dp = []
	let maxLength = 0
	let beginPoi = 0
	for (let i = 0; i < length; i++) {
		if (!dp[i]) dp[i] = []
		dp[i][i] = true
	}
	if (length < 2) {
		return s
	}
	for (let i = 1; i < length; i++) {
		for (let j = 0; j < i; j++) {
			if (s.charAt(i) !== s.charAt(j)) {
				dp[i][j] = false
			} else {
				if (i - j < 3) {
					dp[i][j] = true
				} else {
					dp[i][j] = dp[i - 1][j + 1]
				}
			}

			if(dp[i][j] && i - j + 1 > maxLength) {
				maxLength = i - j + 1
				beginPoi = j
			}
		}
	}
	return s.substring(beginPoi, maxLength + beginPoi)
}

console.log(longestPalindrome('aadsdsa'))

