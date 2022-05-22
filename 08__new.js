function Cat(color, name) {
	this.color = color
	this.name = name
}

const cat = new Cat('blue', 'Tiger')
console.log(cat)


// What is 'new'?
function myNew(constructor, ...args) {
	const obj = {}
	Object.setPrototypeOf(obj, constructor.prototype)
	return constructor.apply(obj, args) || obj
}

const mause = myNew(Cat, 'yellow', 'CatDog')
console.log(mause)