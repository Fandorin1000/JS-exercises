/*

День недели в европейской нумерации

Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.

День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.

*/

function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }
  return day;

}
let date = new Date();
alert(`Сегодня ${getLocalDay(date)}-й день недели` );



