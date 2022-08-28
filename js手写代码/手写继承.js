function Parent() {
	this.args = ['aaa', 'bbb'];

	this.add = (arg) => {
		this.args.push(arg);
	}
}

function Child() {
	Parent.apply(this, [...arguments])
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child1 = new Child();
child1.add('asd');
console.log(child1.args)


const child2 = new Child();
child2.add('asd111');
console.log(child2.args)
