/*

Создать Calculator при помощи конструктора
важность: 5
Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.
Пример использования:

let calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );

*/

function Calculator() {

	this.read = function() {
		this.a = +prompt('a?', ' ');
		this.b = +prompt('b?', ' ');
	};
	this.sum = function() {
		return this.a + this.b;
	};
	this.mul = function() {
		return this.a * this.b;
	};
}
let calculator = new Calculator();
calculator.read();

let summa = document.getElementById('sum');
summa.addEventListener('click', getSum);

let mul = document.getElementById('mul');
mul.addEventListener('click', getMul);

function getSum() {
	alert( "Сумма=" + calculator.sum() );
}
function getMul() {
	alert( "Произведение=" + calculator.mul() );
}


