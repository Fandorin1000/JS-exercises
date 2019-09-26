/*
Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.

Например:

arr = ["test", 2, 1.5, false];

find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2

find(arr, 0); // -1
*/

function find(arr, value) {

	value = arr.indexOf(value);
	return value;
};

let mix = ["test", 2, 1.5, false];

alert(find(mix, 2) );




