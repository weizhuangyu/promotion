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
var preorderTraversal = function(root) {
	const res = [];

	function traversal(node, arr) {
		if (!node) {
			return;
		}

		arr.push(node.val);
		if (node.left) {
			traversal(node.left, arr);
		}

		if (node.right) {
			traversal(node.right, arr);
		}
	}

	traversal(root, res);

	return res;
};
