/*
Создайте функцию filterRangeInPlace(arr, a, b), которая получает массив с числами arr и удаляет из него все числа вне диапазона a..b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна менять сам массив и ничего не возвращать.

Например:

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // массив изменился: остались [3, 1]
*/


function filterRangeInPlace(arr, a, b) {
	for (let i = 0; i < arr.length; i++) {
		let clsSrt = arr[i];
		if (clsSrt < a || clsSrt > b) {
			arr.splice(i--, 1);
		}
	}
}

let arr = [1, 2, 3, 4, 5, 17, 29, 75];


filterRangeInPlace(arr, 1, 20);
alert(arr);

