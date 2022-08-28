/**
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 示例：
 输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
 输出：[1,2,4,7,5,3,6,8,9]
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
	const m = matrix.length;
	const n = matrix[0].length;

	const result = [];
	for (let i = 0; i < m + n; i++) {
		if (i % 2 === 0) {
			for (let j = i; j >= 0; j--) {
				if (j < m && i - j < n) {
					result.push(matrix[j][i - j]);
				}
			}
		} else {
			for (let j = 0; j <= i; j++) {
				if (j < m && i - j < n) {
					result.push(matrix[j][i - j]);
				}
			}
		}
	}

	return result;
};

console.log(findDiagonalOrder([
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12]
]))

