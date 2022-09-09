/**
 * 手写函数：传入一个数字（包括正负数、小数），返回一个隔3位就在中间插入一个逗号，
 * 如：-123456789.3423 => -123,456,789 .3423
 */

function addDot(num) {
	const rest = parseInt(num / 1000);
	const remain = num % 1000 < 100 ? ('000' + num % 1000).slice(-3) : num % 1000;
	if (rest >= 1000) {
		return addDot(rest) + ',' + remain;
	} else if (rest === 0) {
		return parseInt(remain);
	} else {
		return rest + ',' + remain;
	}
}

function insertComma(num) {
	const reg = /(-?)(\d+)(\.\d*)?/;
	const strArr = String(num).match(reg)
	const first = strArr[1];
	const intNum = strArr[2];
	const decimalNum = strArr[3];

	return first + addDot(intNum) + decimalNum;
}

console.log(insertComma(-10.3423))

// 方法2 正则
// 金额转千分位
const formatPrice = (number) => {
	number = '' + number

	const [ integer, decimal = '' ] = number.split('.')

	return integer.replace(/\B(?=(\d{3})+$)/g, ',') + (decimal ? '.' + decimal : '')
}

console.log(formatPrice(-789.3343));
