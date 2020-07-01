/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
	this.size = k
	this.head = -1
	this.tail = -1
	this.data = []
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
	if (this.isFull()) {
		return false
	}
	if (this.isEmpty()) {
		this.head = 0
	}
	this.tail = (this.tail + 1) % this.size
	this.data[this.tail] = value
	return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
	if (this.isEmpty()) {
		return false
	}
	if (this.head === this.tail) {
		this.head = -1
		this.tail = -1
		return true
	}
	this.head = (this.head + 1) % this.size
	return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
	if (this.isEmpty()) {
		return -1
	}
	return this.data[this.head]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
	if (this.isEmpty()) {
		return -1
	}
	return this.data[this.tail]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
	if (this.head === -1 && this.tail === -1) {
		return true
	}
	return false
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
	if ((this.tail + 1) % this.size === this.head) {
		return true
	}
	return false
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

var obj = new MyCircularQueue(3)
obj.enQueue(1)
obj.enQueue(2)
obj.enQueue(3)
obj.enQueue(4)
console.log(obj.Front())
console.log(obj.Rear())
obj.deQueue()
console.log(obj.Front())
console.log(obj.Rear())
obj.deQueue()
obj.deQueue()
console.log(obj.data.length)
console.log(obj.isEmpty())
obj.enQueue(1)
obj.enQueue(2)
obj.enQueue(3)
console.log(obj.isFull())