/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val
	this.next = null
}
const swapPairs = function(head) {
	while (head == null || head.next == null) {
		return head;
	}
	const thread = new ListNode(-1)
	thread.next = head
	let c = thread
	while (c.next && c.next.next) {
		const a = c.next
		const b = c.next.next
		a.next = b.next
		b.next = a
		c.next = b
		c = c.next.next
	}
	return thread.next
}

var a = new ListNode(1)
var b = new ListNode(2)
var c = new ListNode(3)

a.next = b
b.next = c

var e = swapPairs(a)

console.log(e)