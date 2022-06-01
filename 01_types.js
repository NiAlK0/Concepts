// 7 types js
console.log('8 types js')
console.table(
	{
		value: [null, undefined, true, 10, 'some text', {}, Symbol("js"), 3n],
		type: [
			typeof (null),
			typeof (undefined),
			typeof (true),
			typeof (10),
			typeof ('string'),
			typeof ({}),
			typeof (Symbol('js')),
			typeof (3n)
		],
		'not type': [
			typeof (function () { }),
			NaN
		]
	}
)

// falsy values
console.log('falsy values')
console.table(
	{
		'falsy values': ['', 0, undefined, null, NaN, false]
	}
)

// string and number
console.log('string and number')
console.table({
	value: ["(4 + '2')", "('' + 4 + 2)", "('' - 4 + 2)", "('2' * 2)", "('2' * '2')", "(41 + 1 + 'px')", "('42px' - 2)", "(null + 2)", "undefined + 42"],
	result: [(4 + '2'), ('' + 4 + 2), ('' - 4 + 2), ('2' * 2), ('2' * '2'), (41 + 1 + 'px'), ('42px' - 2), (null + 2), undefined + 42]
}
)

// == vs ===
console.log('== vs ===')
console.table({
	value: ["2 =='2'", "2 ==='2'", "undefined == null", " undefined === null", " '0' == false", "'0'=== false", "0 == '0'", "0 === '0'"],
	result: [2 == '2', 2 === '2', undefined == null, undefined === null, '0' == false, '0' === false, 0 == '0', 0 === '0'],
	value2: ["false == ''", "false == []", "false == {}", "0 == null'", "0 == []", "0 == {}", "'' == 0", "'' == []", "'' == {}"],
	result2: [false == '', false == [], false == {}, 0 == null, 0 == [], 0 == {}, '' == 0, '' == [], '' == {}]
}
)


