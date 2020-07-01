/**
 * 示例 :
 * 给定二叉树

	          1
	         / \
	        2   3
	       / \
	      4   5
 返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。
 注意：两结点之间的路径长度是以它们之间边的数目表示。
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
var diameterOfBinaryTree = function(root) {
	let res = 0
	function depth (node) {
		if (!node) return 0 // 节点不存在返回0
		let left = depth(node.left) // left为左子树的深度
		let right = depth(node.right)//right 为右子树的深度
		res = Math.max(left + right, res) //计算l+r 更新res
		return Math.max(left, right)+1 //返回该节点为根的子树的深度
	}
	depth(root)
	return res
};