/**
 * 输入一个整型数组，数组里有正数也有负数。
 * 数组中的一个或连续多个整数组成一个子数组。
 * 求所有子数组的和的最大值。要求时间复杂度为O(n)。
 */
/**
 * 示例1:
 * 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let pre = nums[0]
	let max = nums[0]
	const length = nums.length
	for (let i = 1; i < length; i++) {
		pre = Math.max(nums[i], pre + nums[i])
		max = Math.max(max, pre)
	}
	return max
};

console.log(maxSubArray([-2,1,3,-1]))