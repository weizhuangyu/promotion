/**
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 * 示例:
 * 给定有序数组: [-10,-3,0,5,9],
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
														      0
														     / \
														   -3   9
														   /   /
														 -10  5
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * 二叉搜索树（Binary Search Tree）是指一棵空树或具有如下性质的二叉树：
 * 1. 若任意节点的左子树不空，则左子树上所有节点的值均小于它的根节点的值
 * 2. 任意节点的右子树不空，则右子树上所有节点的值均大于它的根节点的值
 * 3. 任意节点的左、右子树也分别为二叉搜索树
 * 4. 没有键值相等的节点
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(value) {
	this.value = value
	this.left = null
	this.right = null
}
var sortedArrayToBST = function(nums) {
	if (!nums.length) {
		return null
	}
	const middle = Math.floor(nums.length / 2)
	const node = new TreeNode(nums[middle])
	node.left = sortedArrayToBST(nums.slice(0, middle))
	node.right = sortedArrayToBST(nums.slice(middle + 1))
	return node
}

console.log(sortedArrayToBST([1,2,3,4,5]))