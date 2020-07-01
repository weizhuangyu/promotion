/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
	this.size = size
	this.array = []
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
	if (this.array.length < this.size) {
		this.array.push(val)
	} else {
		this.array.shift()
		this.array.push(val)
	}
	return this.array.reduce((pre, next) => pre + next, 0) / this.array.length
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

var obj = new MovingAverage(3)

console.log(obj.next(10))
console.log(obj.next(20))
console.log(obj.next(30))
console.log(obj.next(40))