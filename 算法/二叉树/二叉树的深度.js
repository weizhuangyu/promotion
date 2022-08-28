/**
 * 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7]
										    3
										   / \
										  9  20
										    /  \
										   15   7
 返回它的最大深度 3 。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
	this.val = val
	this.left = this.right = null
}

// 广度优先算法
// var maxDepth = function(root) {
// 	const queue = [ root ]
// 	let depth = 0
// 	while (queue.length) {
// 		let length = queue.length
// 		let flag = true
// 		while (length) {
// 			const node = queue.shift()
// 			if (node && (node.val || node.val === 0)) {
// 				if (flag) {
// 					flag = false
// 					depth++
// 				}
// 				node.left && (queue.push(node.left))
// 				node.right && (queue.push(node.right))
// 			}
// 			length--
// 		}
// 	}
// 	return depth
// };

var maxDepth = function (root) {
	let maxLen = 0;
	function depth(node, dep) {
		if (!node) {
			return 0;
		}

		maxLen = Math.max(maxLen, dep + 1);
		depth(node.left, dep + 1);
		depth(node.right, dep + 1);
	}
	depth(root, 0);

	return maxLen;
}

var v1 = new TreeNode(3)
var v2 = new TreeNode(9)
var v3 = new TreeNode(20)
var v4 = new TreeNode(null)
var v5 = new TreeNode(null)
var v6 = new TreeNode(15)
var v7 = new TreeNode(7)

v1.left = v2
v1.right = v3
v2.left = v4
v2.right = v5
v3.left = v6
v3.right = v7

console.log(maxDepth(v1))
