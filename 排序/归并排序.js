const merge = (leftArray, rightArray) => {
	let result = []
	while(leftArray.length && rightArray.length) {
		if (leftArray[0] < rightArray[0]) {
			result.push(leftArray.shift())
		} else {
			result.push(rightArray.shift())
		}
	}
	leftArray.length && (result = result.concat(leftArray))
	rightArray.length && (result = result.concat(rightArray))
	return result
}

const mergeSort = (arrayList) => {
	const length = arrayList.length
	if (length < 2) {
		return arrayList
	}

	const middle = Math.floor( length / 2)
	const leftArray = arrayList.slice(0, middle)
	const rightArray = arrayList.slice(middle, length)
	return merge(mergeSort(leftArray), mergeSort(rightArray))
}

console.log(mergeSort([1,3,2,5,8,6,5,4]))