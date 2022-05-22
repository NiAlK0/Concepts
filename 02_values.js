let a = 42
let b = a
b++
console.table({
	a: a,
	b: b
})


let aa = [1, 2, 3]
let bb = aa
// if use concat(), copy array will be returned and original array will not mutate
// let bb = aa.concat() 
bb.push(4)
let с = [1, 2, 3, 4]

console.table({
	a: aa,
	b: bb,
	value: ['a === b (not concat() )', 'a === c'],
	result: [aa === bb, aa === с]
})

// array 'aa' && 'bb' equivalent, but 'aa' != 'с' because this different object
