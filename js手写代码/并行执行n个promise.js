/**
 * 写一个方法，同时最多并行运行n个promise, 多余的会等待前面的执行完后再执行
 */

function handleFetchQueue(promises, max, callback) {
	let count = 0;
	const resultList = [];
	let promiseCount = 0;

	function handleFetch(promise, cnt) {
		promiseCount += 1;

		if (promiseCount < max) {
			count += 1;
			handleFetch(promises[count], count);
		}

		promise.then((result) => {
			resultList[cnt] = result;

			if (count < promises.length - 1) {
				promiseCount -= 1;
				count += 1;
				handleFetch(promises[count], count);
			}
			const resultLists = resultList.filter((item) => item !== undefined);
			if (resultLists.length === promises.length) {
				callback && callback(resultList);
			}
		})
	}

	handleFetch(promises[count], count);
}


const urls = Array.from({length: 10}, (v, k) => k);

const fetch = function (idx) {
	return new Promise(resolve => {
		const timeout = parseInt(Math.random() * 1e4);
		setTimeout(() => {
			console.log(`end request ${idx}`);
			resolve(idx)
		}, timeout)
	})
};

const callback = (results) => {
	console.log('run callback', results);
};

handleFetchQueue(urls.map((url) => fetch(url)), 4, callback);
