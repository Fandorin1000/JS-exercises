/*
я сделал наалогично, только месяц
Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
я сделал наалогично, только месяц
Например:
я сделал наалогично, только месяц
let date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'
я сделал наалогично, только месяц
я сделал наалогично, только месяц
я сделал наалогично, только месяц
*/

function getMonth(month) {
	let months = ['январь',
				  'февраль',
				  'март',
				  'апрель',
				  'май',
				  'июнь',
				  'июль',
				  'август',
				  'сентябрь',
				  'октябрь',
				  'ноябрь',
				  'декабрь'];

 return months[month.getMonth()];
}

let month = new Date();

alert(getMonth(month) );