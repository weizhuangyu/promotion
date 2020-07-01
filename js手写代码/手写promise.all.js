Promise.all = function(promises){
	const arr = []
	let index = 0
	return new Promise((resolve, reject)=>{
		for (let i = 0; i < promises.length; i++) {
			promises[i]
				.then((data) => {
					arr[i] = data
					index++
					if(index === promises.length){
						resolve(arr)
					}
				})
				.catch(error => {
					reject(error)
				})
		}
	})
}

const promiseArray = []
for (let i = 0; i < 10; i++) {
	promiseArray.push(
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(i)
			}, 10000 - 1000 * i)
		})
	)
}

Promise.all(promiseArray)
	.then((items) => {
		console.log(items)
	})
	.catch((error) => {
		console.log(error)
	})