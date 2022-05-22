// Сlosures(замыкание) - момент когда функция имеет доступ к переменным из вышестоящего scope

function greeting(name) {
	const msg = `Hello ${name}`

	return function () {
		console.log(msg)
	}
}
const helloHeisenberg = (greeting('Heisenberg')())


function createFramworkManager() {
	const framwork = ['vue', 'react']
	return {
		output: function () {
			console.log(framwork.join(' '))
		},
		add: function (fw) {
			framwork.push(fw)
		}
	}
}

const manager = createFramworkManager()
console.log('manager:', manager)
manager.output()
manager.add('Some fw')
manager.output()

// setTimout

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) { // if var replace let all good, but if we can't use ES6 >>>
	setTimeout(function () {
		console.log(`fib[${i}] = ${fib[i]}`)
	}, 1500)
}
// >>>

for (var i = 0; i < fib.length; i++) {
	(function (j) {
		setTimeout(function () {
			console.log(`fib[${j}] = ${fib[j]}`)
		}, 1500)
	}(i))
}