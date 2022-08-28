/**
 给定一个字符串s，找到s中最长的回文子串。你可以假设s的最大长度为1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */

function longestLength(s, l, r) {
	// 防止索引越界
	while (l >= 0 && r < s.length && s[l] === s[r]) {
		// 向两边展开
		l--;
		r++;
	}
	// 返回以 s[l] 和 s[r] 为中心的最长回文串
	return s.slice(l + 1, r);
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
	let maxString = ''
	// i为中心回文点
	for (let i = 0; i < s.length; i++) {
		const result1 = longestLength(s, i, i) // 匹配回文为奇数的情况
		const result2 = longestLength(s, i, i + 1) // 匹配回文为偶数的情况
		const maxTwoString = result1.length >= result2.length ? result1 : result2
		maxString = maxTwoString.length >= maxString.length ? maxTwoString : maxString
	}
	return maxString
};

console.log(longestPalindrome('12cd1221dcdc2c'))




