// function quickSort(array) {
// 	const length = array.length
// 	if (length < 2) {
// 		return array
// 	}
// 	const splitNum = Math.floor(length / 2)
// 	const leftArray = []
// 	const rightArray = []
// 	const sortNum = array[splitNum]
// 	for (let i = 0; i < length; i++) {
// 		if (i === splitNum) {
// 			continue
// 		}
// 		const num = array[i]
// 		if (num <= sortNum) {
// 			leftArray.push(num)
// 		} else {
// 			rightArray.push(num)
// 		}
// 	}
// 	return quickSort(leftArray).concat(sortNum, quickSort(rightArray))
// }

function swap(array, i, j) {
	const temp = array[j]
	array[j] = array[i]
	array[i] = temp
}

function quickSort(array) {
	function sort(array, i, j) {
		const standard = array[j]
		const lastIndex = j
		j--
		while (i !== j) {
			while (i < j && array[i] < standard) i++
			while (i < j && array[j] > standard) j--
			swap(array, i, j)
		}
		if (array[j] > array[lastIndex]){
			swap(array, lastIndex, j)
		}
		if (j > 0) {
			sort(array, 0, j)
		}
		if (j + 1 < lastIndex) {
			sort(array, j + 1, lastIndex)
		}
	}
	sort(array, 0, array.length - 1)
	return array
}
// console.log(quickSort([1,2,1,3]))

console.log(quickSort([2,1,4,9,0]))