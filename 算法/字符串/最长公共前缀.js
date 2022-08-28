/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
	示例 1：
	输入：strs = ["flower","flow","flight"]
	输出："fl"
	示例 2：

	输入：strs = ["dog","racecar","car"]
	输出：""
	解释：输入不存在公共前缀。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if (strs === null || strs.length === 0) return ''

	for (let i = 0; i < strs[0].length; i++) {
		const strChar = strs[0][i];

		for (let j = 0; j < strs.length; j++) {
			if (strChar !== strs[j][i]) {
				return strs[0].slice(0, i);
			}
		}
	}

	return strs[0];
};

console.log(longestCommonPrefix(["flower","alow","floght"]))
