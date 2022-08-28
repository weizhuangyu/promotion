/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 说明：
 * 给定的 n保证是有效的。
 * 进阶：
 * 你能尝试使用一趟扫描实现吗？
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var a = new ListNode(1)
var b = new ListNode(2)
var c = new ListNode(3)
var d = new ListNode(4)
var e = new ListNode(5)

a.next = b
b.next = c
c.next = d
d.next = e

var removeNthFromEnd = function(head, n) {
	const nodeArray = markListNode(head)
	const length = nodeArray.length
	const pre = nodeArray[length - n - 1]
	const next = nodeArray[length - n + 1]
	if (!pre) {
		return head.next
	}
	if (!next) {
		pre.next = null
	} else {
		pre.next = next
	}
	return head
};

function markListNode(head) {
	const nodeArray = [ head ]
	let next = head.next
	while (next) {
		nodeArray.push(next)
		next = next.next
	}
	return nodeArray
}

console.log(JSON.stringify(removeNthFromEnd(a, 5)))