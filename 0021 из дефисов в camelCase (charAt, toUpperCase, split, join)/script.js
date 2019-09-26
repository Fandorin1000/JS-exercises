/*
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/
function camelize(str) {
	let stringer = str.split('-');

	for(let i = 1; i < stringer.length; i++) {
		stringer[i] = stringer[i].charAt(0).toUpperCase() + stringer[i].slice(1); 
	}

	return stringer.join('');
}

alert(camelize("background-color-case-height") );
