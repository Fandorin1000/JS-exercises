/*
Вывод чисел каждые 1000 мс

Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 1000 мс. То есть, весь вывод должен занимать 2000 мс, в течение которых каждые 1000 мс в консоли появляется очередное число.

Нажмите на кнопку, открыв консоль, для демонстрации:

printNumbersInterval()

P.S. Функция должна использовать setInterval.

*/

function printNumbersInterval() {
  var i = 1;
  var timerId = setInterval(function () {
    let p = document.getElementById('p');
    p.innerHTML = i;
    if (i == 20) {
      clearInterval(timerId);
      alert('timer stop after 20 second')
    };
    i++;
  }, 1000);
}

// вызов
printNumbersInterval();