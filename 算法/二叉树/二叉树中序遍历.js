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
 * @return {number[]}
 */
var inorderTraversal = function(root) {

	const res = [];

	function traversal(node, arr) {
		if (!node) {
			return;
		}
		if (node.left) {
			traversal(node.left, arr);
		}
		arr.push(node.val);

		if (node.right) {
			traversal(node.right, arr);
		}
	}

	traversal(root, res);

	return res;
};
