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
 * @return {number[][]}
 */
var levelOrder = function(root) {
	const res = [];
	if (!root) {
		return res;
	}

	function traversal(node, res, index) {
		if (!node) {
			return ;
		}

		if (!res[index]) {
			res[index] = [ node.val ];
		} else {
			res[index].push(node.val);
		}

		traversal(node.left, res, index + 1);
		traversal(node.right, res, index + 1);

		return res;
	}

	traversal(root, res, 0);
};
