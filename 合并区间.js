/**
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 示例 1:
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 * 示例 2:
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	intervals = intervals.sort((a, b) => a[0] - b[0])
	let results = []
	if (intervals.length === 1) {
		return intervals
	}
	for (let i = 0, length = intervals.length; i < length - 1; i++) {
		const current = intervals[i]
		let next = intervals[i + 1]
		if (current[1] >= next[0]) {
			intervals[i + 1] = [current[0], Math.max(current[1], next[1])]
		} else {
			results.push(intervals[i])
		}
		if (i === length - 2) {
			results.push(intervals[i + 1])
		}
	}
	return results
}

console.log(merge([[1,4],[4,5]]))