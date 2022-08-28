/**
 * 手写函数：传入一个数字（包括正负数、小数），返回一个隔3位就在中间插入一个逗号，
 * 如：-123456789.3423 => -123,456,789 .3423
 */

function addDot(num) {
	const rest = parseInt(num / 1000);
	const remain = ('000' + num % 1000).slice(-3);
	if (rest >= 1000 || rest <= -1000) {
		return addDot(rest) + ',' + remain;
	} else if (rest === 0) {
		return remain
	} else {
		return rest + ',' + remain;
	}
}

function insertComma(num) {
	const reg = /(-?\d+)(\.\d*)?/;
	const strArr = String(num).match(reg)
	const intNum = strArr[1];
	const decimalNum = strArr[2];

	return addDot(intNum) + decimalNum;
}

console.log(insertComma(-123456789.3423))
