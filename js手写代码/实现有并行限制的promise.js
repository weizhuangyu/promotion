/*
JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。
完善下面代码的Scheduler类，使以下程序能够正常输出：
class Scheduler {
  add(promiseCreator) { ... }
  // ...
}

const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  }
})

const scheduler = new Scheduler()

const addTask = (time,order) => {
  scheduler.add(() => timeout(time).then(()=>console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')

// output: 2 3 1 4
整个的完整执行流程：

起始1、2两个任务开始执行
500ms时，2任务执行完毕，输出2，任务3开始执行
800ms时，3任务执行完毕，输出3，任务4开始执行
1000ms时，1任务执行完毕，输出1，此时只剩下4任务在执行
1200ms时，4任务执行完毕，输出4
*/

class Scheduler {
	execPool = [];
	size = 0;
	runCount = 0

	constructor(size) {
		this.size = size;
	}

	add(promiseCreator) {
		this.execPool.push(promiseCreator);
		this.exec()
	}

	exec() {
		if (this.runCount < this.size && this.execPool.length) {
			this.runCount++;
			const promiseCreator = this.execPool.shift();

			promiseCreator().then(() => {
				this.runCount--;
				this.exec();
			})
		}
	}

}

const timeout = time => {
	return new Promise(resolve => {
		setTimeout(resolve, time)
	})
}

const scheduler = new Scheduler(2)

const addTask = (time, order) => {
	scheduler.add(() => timeout(time).then(()=>console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
