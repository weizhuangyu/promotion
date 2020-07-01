/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 示例:
		输入: [-2,1,-3,4,-1,2,1,-5,4],
		输出: 6
		解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
	let sum = 0
	let ans = nums[0]
	for (let num of nums) {
		if (sum <= 0) {
			sum = num
		} else {
			sum += num
		}
		ans = Math.max(ans, sum)
	}
	return ans
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 3]))