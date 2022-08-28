/**
 * 给定一个字符串，找到他第一个不重复的字符，返回索引，如果不存在，返回-1
 s = "saber"
 返回 0

 s = "tiktok"
 返回 1
 */

function firstChar(str) {
	const map = new Map();

	for(let i of str) {
		if (!map.has(i)) {
			map.set(i, 1);
		} else {
			map.set(i, map.get(i) + 1);
		}
	}

	for (let [key, value] of Object.entries(str)) {
		if (map.get(value) === 1) {
			return key
		}
	}

	return -1;
}

console.log(firstChar('saber'));
console.log(firstChar('tiktok'));
