// __proto__ указывает на прототип родительского класса или объекта
// Object.getPrototypeOf() -- ES5

function Cat(name, color) {
	this.name = name
	this.color = color
}

Cat.prototype.voice = function () {
	console.log(`Cat ${this.name} says: 'You called me ${this.name} so I peed in your sneakers'`)
}

const cat = new Cat('Dog', 'green')
console.log(Cat.prototype)
console.log(cat)
console.log(cat.__proto__ === Cat.prototype)
console.log(cat.constructor)
cat.voice()

// *___________*

function Person() { }
Person.prototype.head = 2
Person.prototype.skin = 'black'

const person = new Person()
person.head = '1'

console.log('skin' in person)
console.log(person.head)

// Определение своё или наследуемое свойство объекта
console.log(person.hasOwnProperty('skin'))
console.log(person.hasOwnProperty('head'))

// Object.create()

const proto = { year: 2022 }
const myYear = Object.create(proto)
console.log(myYear.year)

console.log(myYear.hasOwnProperty('year'))
console.log(myYear.__proto__ === proto)