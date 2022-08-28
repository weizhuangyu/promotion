/**
 * 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
 * 2～10为数字本身，A为1，J为11，Q为12，K为13，
 * 大、小王为 0, 可以看成任意数字。A 不能视为 14
 */

/**
 * 示例:
 * 输入: [1,2,3,4,5]
 * 输出: True
 */

/**
 * 示例:
 * 输入: [0,0,1,2,5]
 * 输出: True
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
	const sortNums = nums.sort((a, b) => a - b)
	let zeroNums = 0
	for (let i = 0, len = sortNums.length -1; i < len; i++) {
		if (sortNums[i] === 0) {
			zeroNums++
			continue
		}
		if (sortNums[i] === sortNums[i+1]) {
			return false
		}
		zeroNums -= (sortNums[i+1]-sortNums[i] - 1)
	}
	return zeroNums >= 0
}

console.log(isStraight([10,11,0,12,6]))
console.log(isStraight([0,0,1,2,5]))