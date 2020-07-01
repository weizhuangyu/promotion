/**
 * 写一个方法，同时最多并行运行n个promise, 多余的会等待前面的执行完后再执行
 */

function runTask(promiseArray, runLength, n) {
	const task = promiseArray.shift()
	task().then((result) => {
		console.log(result)
		runLength--
		if (promiseArray.length && runLength < n) {
			runTask(promiseArray, runLength, n)
		}
	})
}

function run (promiseArray, n) {
	let runLength = 0
	while (runLength < n && promiseArray.length) {
		runLength++
		runTask(promiseArray, runLength, n)
	}
}

const promiseArray = []
for (let i = 0; i < 10; i++) {
	promiseArray.push(
		() => new Promise((resolve) => {
			setTimeout(() => {
				resolve(i)
			}, 1000 * i)
		})
	)
}

run(promiseArray, 5)
