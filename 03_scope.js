// Scope - это что-то, что говорит о доступности определенных переменных в функциях в коде. (область видимости)


// global scope && local scope
// когда переменные объявлены вне функции, но доступны внутри функций этого scope - global scope
function functionA() {
	let a = 1
	function functionB() {
		let b = 2
		function functionC() {
			let с = 3
			console.log('functionC:', a, b, с)
		}
		functionC()
		console.log('functionB:', a, b)
	}
	functionB()
	console.log('functionA:', a)
}
functionA()