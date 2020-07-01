var lexicalOrder = function (n) {
	let ans = []
	function dfs(num) {
		if (num <= n) ans.push(num)
		else return // 剪枝
		for (let i = 0; i <= 9; i++) dfs(num * 10 + i)
	}
	for (let i = 1; i < 10; i++) dfs(i)
	return ans
};

console.log(lexicalOrder(100))