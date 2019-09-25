/*
Есть стоимость в виде строки: "$120". То есть, первым идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять число-значение, в данном случае 120.
*/

function extractCurrencyValue(str) {
	if (str.length >= 2) {
		return +str.slice(1);
	} return +str;
}
alert(extractCurrencyValue('$120') );
