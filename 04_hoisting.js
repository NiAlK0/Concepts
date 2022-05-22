console.log('sum:', sum(41, 1))  // works before defined

function sum(a, b) {
	return a + b
}

console.log('a:', a) // 'a:' undefined, but whith const && let -- error
var a = 42
console.log('a:', a) //works


// Function Declaration && Function Expression

nameFunction(2)	// Function Declaration can use before defined
function nameFunction(num) {
	return nem ** 3
}

//functionName(2)	// Function Expression can't use before defined
const functionName = function (num) {
	return nem ** 3
}