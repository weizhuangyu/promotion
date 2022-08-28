/**
 * 给定整数 n 和 k，找到 1 到 n 中字典序第 k 小的数字。
 * 注意：1 ≤ k ≤ n ≤ 109。
 * 示例 :
		输入:
		n: 13   k: 2
		输出:
		10
		解释:
		字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {
	let getCount = (prefix, n) => {
		let cur = prefix
		let next = prefix + 1 //下一个前缀
		let count = 0
		//当前的前缀当然不能大于上界
		while(cur <= n) {
			count += Math.min(n + 1, next) - cur //下一个前缀的起点减去当前前缀的起点
			cur *= 10
			next *= 10
			// 如果说刚刚prefix是1，next是2，那么现在分别变成10和20
			// 1为前缀的子节点增加10个，十叉树增加一层, 变成了两层

			// 如果说现在prefix是10，next是20，那么现在分别变成100和200，
			// 1为前缀的子节点增加100个，十叉树又增加了一层，变成了三层
		}
		return count//把当前前缀下的子节点和返回去。
	}
	let p = 1
	let prefix = 1
	while(p < k) {
		let count = getCount(prefix, n)
		if(p + count > k) {
			prefix *= 10
			p++
		} else if(p + count <= k) {
			prefix ++
			p += count
		}
	}
	return prefix
}