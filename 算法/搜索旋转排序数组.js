/**
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 * (例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 * 你可以假设数组中不存在重复的元素。
 * 你的算法时间复杂度必须是 O(log n) 级别。
 */

/**
 * 示例 1:
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 */

/**
 * 示例 2:
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 方法一：自己手写，比较复杂，应该操作index比较方便

var search = function(nums, target) {
	const index = findIndex(nums, 0)
	if (!index) {
		return findValue(nums, target)
	}
	if (nums[0] <= target) {
		return findValue(nums.slice(0, index), target)
	} else {
		const value = findValue(nums.slice(index), target)
		if (value < 0) {
			return value
		}
		return index + value
	}
}

function findValue(array, target) {
	const middle = Math.floor(array.length / 2)
	if (array.length <= 1 && array[0] !== target) {
		return -1
	}
	if (array[middle] < target) {
		const value = findValue(array.slice(middle), target)
		if (value < 0) {
			return value
		}
		return middle + value
	} else if (array[middle] > target) {
		return findValue(array.slice(0, middle), target)
	} else {
		return middle
	}
}

function findIndex(nums, lastMiddle) {
	const length = nums.length
	const middle = Math.floor(length / 2)
	const middleValue = nums[middle]
	if (middleValue >= nums[middle - 1] && middleValue <= nums[middle + 1]) {
		if (nums[0] <= middleValue) {
			lastMiddle += middle
			return findIndex(nums.slice(middle), lastMiddle)
		} else {
			return findIndex(nums.slice(0, middle + 1), lastMiddle)
		}
	} else if (middleValue < nums[middle - 1]) {
		return middle + lastMiddle
	} else if (middleValue > nums[middle + 1]) {
		return middle + 1 + lastMiddle
	}
}

// 方法二： 大神写法，边界值调整，操作index
var search2 = function(nums, target) {
	let lo = 0
	let hi = nums.length - 1
	let mid = 0
	while (lo <= hi) {
		mid = lo + (hi - lo) / 2
		if (nums[mid] === target) {
			return mid
		}
		// 先根据 nums[mid] 与 nums[lo] 的关系判断 mid 是在左段还是右段
		if (nums[mid] >= nums[lo]) {
			// 再判断 target 是在 mid 的左边还是右边，从而调整左右边界 lo 和 hi
			if (target >= nums[lo] && target < nums[mid]) {
				hi = mid - 1
			} else {
				lo = mid + 1
			}
		} else {
			if (target > nums[mid] && target <= nums[hi]) {
				lo = mid + 1
			} else {
				hi = mid - 1
			}
		}
	}
	return -1
}

console.log(search([4,5,6,7,0,1,2], 3))

