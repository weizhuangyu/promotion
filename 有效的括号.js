var isValid = function(s) {
	const mapSingal = {
		'(': 1,
		'{': 2,
		'[': 3,
		')': 4,
		'}': 5,
		']': 6
	}
	const sArray = s.split('')
	const nArray = []
	while (sArray.length) {
		const str = sArray.shift()
		if (mapSingal[str] <= 3) {
			nArray.push(mapSingal[str])
		} else {
			if (!nArray.length) {
				return false
			}
			const leftNum = nArray.pop()
			if (mapSingal[str] - leftNum !== 3) {
				return false
			}
		}
	}
	return !nArray.length
}

console.log(isValid(""))