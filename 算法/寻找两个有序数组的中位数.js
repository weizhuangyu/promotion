/**
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 示例 1:
				nums1 = [1, 3]
				nums2 = [2]
				则中位数是 2.0
   示例 2:
				nums1 = [1, 2]
				nums2 = [3, 4]
				则中位数是 (2 + 3)/2 = 2.5
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 思路： 循环 （m + n）/ 2 + 1次，只保留需要计算的中间数
const findMedianSortedArrays = function(nums1, nums2) {
	const length1 = nums1.length
	const length2 = nums2.length
	const totalLength = length1 + length2
	const middle = Math.floor(totalLength / 2) + 1
	let left = 0, right = 0 // 用于计算中位数
	let mleft = 0, mright = 0 // 用于偏移
	for (let i = 0; i < middle; i++) {
		left = right
		if (mleft < length1 && (nums1[mleft] <= nums2[mright] || mright === length2)) {
			right = nums1[mleft++]
		} else {
			right = nums2[mright++]
		}
	}
	if (totalLength & 1) {
		return right
	} else {
		return (left + right) / 2
	}
}

console.log(findMedianSortedArrays([1], [3, 4]))