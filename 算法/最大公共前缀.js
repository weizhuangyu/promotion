/**
 * 求最大公共前缀，如 ['aaafsd', 'aawwewer', 'aaddfff'] => 'aa'
 */

function maxPrefix(arr) {
	let maxStr = '';

	if (arr.length === 0) {
		return maxStr
	}
	const arr0 = arr.splice(0, 1)[0];
	if (arr.length === 1) {
		return arr0
	}

	let str = '';

	for (let i = 0; i < arr0.length; i ++) {
		let flag = true;
		str += arr0[i];
		for (let j = 0; j < arr.length; j++) {
			if (!arr[j].includes(str)) {
				flag = false;
				break;
			}
		}
		if (!flag) {
			maxStr = maxStr.length > str.length - 1 ? maxStr : str.slice(0, str.length - 1);
			break;
		}
	}

	return maxStr;

}

console.log(maxPrefix(['aaafsd', 'wwaaafewer', 'aaafddfff']))
