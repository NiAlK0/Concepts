// context != scope. context определяет как функция была вызвана, постоянно указывает на this 
const indian = {
	surname: 'Balls',
	knows: function (what, name) {
		console.log(`You ${what} know, ${name} ${this.surname}`)
	}
}
const small = {
	surname: 'Boobs'
}
indian.knows('all', 'Big')
indian.knows.call(small, 'nothing', 'Small')
indian.knows.call(small, ...['nothing', 'Small']) //ES6
indian.knows.apply(small, ['nothing', 'Small'])
indian.knows.bind(small, 'nothing', 'Small')() //need call

// *___________*

function Indian(name, surname) {
	this.name = name
	this.surname = surname

	console.log(this)
}

const stoopedDog = new Indian('Stooped', 'Dog')
// *++___________++* явная привязка context

function logThis() {
	console.log(this)
}
const obj = { num: 42 }
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

// *!--___________--* Не явная привязка context
const animal = {
	legs: 8,
	logThis: function () {
		console.log(this)
	}
}
animal.logThis()

// *?___________?* Arrow function не создает context
function AnimalColor(color, animal) {
	this.color = color
	this.animal = animal
	console.log('This', this);
	(() => console.log('Arrow this', this))()
}

new AnimalColor('red', 'mause')