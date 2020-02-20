/*

Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

Например:

sum(1)(2) = 3
sum(5)(-1) = 4
*/

function sum(a) {
	return function (b) {
		return a + b;
	}
}
alert(sum(5)(4));


