/*
Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10

*/

function sum() {
	let result = 0;

	for(let i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}
alert( sum() ); // 0
alert( sum(1) ); // 1
alert( sum(1, 2) ); // 3
alert( sum(1, 2, 3) ); // 6
alert( sum(1, 2, 3, 4) ); // 10