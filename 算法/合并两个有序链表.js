/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	const listNode = new ListNode()
	let tempListNode = listNode
	if (!l1 && !l2) {
		return null
	}
	while(l1 && l2) {
		if (l1.val <= l2.val) {
			tempListNode.val = l1.val
			l1 = l1.next
		} else {
			tempListNode.val = l2.val
			l2 = l2.next
		}
		tempListNode.next = new ListNode()
		tempListNode = tempListNode.next
	}
	while (l1) {
		tempListNode.val = l1.val
		l1 = l1.next
		if (l1) {
			tempListNode.next = new ListNode()
			tempListNode = tempListNode.next
		}
	}
	while (l2) {
		tempListNode.val = l2.val
		l2 = l2.next
		if (l2) {
			tempListNode.next = new ListNode()
			tempListNode = tempListNode.next
		}
	}
	return listNode
};

// 方法二： 递归
function mergeTwoLists(l1, l2) {
	if (l1 == null) {
		return l2;
	}
	else if (l2 == null) {
		return l1;
	}
	else if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	}
	else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
}