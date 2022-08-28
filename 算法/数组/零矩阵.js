/**
 * 编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。
      输入：
			[
			  [1,1,1],
			  [1,0,1],
			  [1,1,1]
			]
			输出：
			[
			  [1,0,1],
			  [0,0,0],
			  [1,0,1]
			]
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

	if (!matrix.length) {
		return matrix;
	}
	const m = matrix.length;
	const n = matrix[0].length;

	const row = [];
	const col = [];

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (!matrix[i][j]) {
				row[i] = 1;
				col[j] = 1;
			}
		}
	}

	for (let i = 0; i < m; i ++) {
		for (let j = 0; j < n; j++) {
			if (row[i] || col[j]) {
				matrix[i][j] = 0
			}
		}
	}

	return matrix;
};

console.log(setZeroes([
	[1,1,1],
	[1,0,1],
	[1,1,1]
]));
