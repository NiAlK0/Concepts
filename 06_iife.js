// Immediate Invoked Function Expression = (function(){}())

let result = []
for (var i = 0; i < 5; i++) {
	result.push(function () {
		console.log('i:', i)
	})
}

result[3]()
result[4]()
// all = 5 because use var

let result2 = []
for (var i = 0; i < 5; i++) {
	(function () {
		var j = i
		result2.push(function () {
			console.log('j:', j)
		})
	}())
}

result2[3]()
result2[4]()
// all good because use iife