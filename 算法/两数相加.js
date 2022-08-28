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

function ListNode(val) {
  this.val = val
  this.next = null
}

var addTwoNumbers = function(l1, l2) {
	let val = 0, add = 0
	let result = new ListNode(val)
	const newResult = result
	while(l1 || l2) {
		const l1Val = (l1 && l1.val) || 0
		const l2Val = (l2 && l2.val) || 0
		val = l1Val + l2Val + add
		if (val >= 10) {
			val -= 10
			add = 1
		} else {
			add = 0
		}
		result.val = val
		l1 = l1 && l1.next
		l2 = l2 && l2.next
		if (l1 || l2) {
			result.next = new ListNode(0)
			result = result.next
		}
	}
	if (add) {
		result.next = new ListNode(0)
		result = result.next
		result.val = add
	}
	return newResult
}

var l1 = new ListNode(5)
// var newL1 = l1
l1.next = new ListNode(8)
// l1 = l1.next
// l1.next = new ListNode(3)
// l1 = l1.next

var l2 = new ListNode(5)
// var newL2 = l2
l2.next = new ListNode(9)
// l2 = l2.next
// l2.next = new ListNode(4)
// l2 = l2.next
console.log(addTwoNumbers(l1, l2))