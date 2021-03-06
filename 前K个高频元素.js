/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 示例 1:
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 *
 * 示例 2:
 * 输入: nums = [1], k = 1
 * 输出: [1]
 *
 * 提示：
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
 * 你可以按任意顺序返回答案。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
	const map = new Map()
	const bucketArray = []
	const results = []
	nums.forEach((item) => {
		if (!map.has(item)) {
			map.set(item, 1)
		} else {
			map.set(item, map.get(item) + 1)
		}
	})
	for (let [key, value] of map) {
		if (!bucketArray[value]) {
			bucketArray[value] = [ key ]
		} else {
			bucketArray[value].push(key)
		}

	}
	for (let i = bucketArray.length; i > 0; i --) {
		if (!bucketArray[i]) {
			continue
		}
		for (let value of bucketArray[i]) {
			if (results.length < k) {
				results.push(value)
			} else {
				break
			}
		}

	}
	return results
};

console.log(topKFrequent([1,1,1, 3,3,3,4,4,2], 2))