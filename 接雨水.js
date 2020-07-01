/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
	let leftMax = 0, rightMax = 0;
	let count = 0
	for (let i = 0, length = height.length; i < length; i++) {
		const num = height[i]
		if (leftMax > num && rightMax > num) {
			count += Math.min(leftMax, rightMax) - num
		}
		leftMax = Math.max(leftMax, num)
		rightMax = Math.max(...height.slice(i + 1))
	}
	return count
}


console.log(trap([2, 0, 2]))