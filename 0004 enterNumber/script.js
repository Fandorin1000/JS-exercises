let enterNumber = prompt("Введите любое число", "");
if (enterNumber > 0) {
	alert(enterNumber);
} else if (enterNumber == 0) {
	alert("0");
} else if (enterNumber < 0) {
	alert("число меньше нуля");
} else if (enterNumber == null) {
	alert('ввод числа отменён');
} else {
	alert("Эй, введите любое число");
}