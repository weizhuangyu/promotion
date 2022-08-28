/**
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 示例 1:
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 *
 * 示例2:
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	intervals = intervals.sort((a, b) => a[0] - b[0]);
	if (intervals.length === 1) {
		return intervals;
	}

	return intervals.reduce((pre, next) => {
		if (!pre[pre.length - 1] || pre[pre.length - 1][1] < next[0]) {
			pre.push(next)
		}
		if (pre[pre.length - 1][1] >= next[0]) {
			pre[pre.length - 1] = [pre[pre.length - 1][0], Math.max(pre[pre.length - 1][1], next[1])]
		}
		return pre;
	}, []);
}

console.log(merge([[1,3],[5,7],[4,6]]))
