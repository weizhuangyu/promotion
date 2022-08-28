/**
 * 给你二叉树的根节点root和一个表示目标和的整数targetSum。
 * 判断该树中是否存在根节点到叶子节点的路径，
 * 这条路径上所有节点值相加等于目标和targetSum 。
 * 如果存在，返回 true ；否则，返回 false 。
 * 叶子节点 是指没有子节点的节点
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
	let result = false

	if (!root) {
		return result;
	}
	function traversal(node, sum) {
		sum -= node.val;

		if (sum === 0 && !node.left && !node.right) {
			result = true;
		}
		if (node.left) {
			traversal(node.left, sum);
		}

		if (node.right) {
			traversal(node.right, sum);
		}
	}

	traversal(root, targetSum);

	return result;
};
