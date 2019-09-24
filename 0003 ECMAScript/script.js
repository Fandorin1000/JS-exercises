var nameJS = prompt("Какое официальное название JS?", "");
if (nameJS == "ECMAScript") {
	alert("Правильно, красавчик");
} else if (nameJS == null) {
	alert("Ввод отменён");
} else {
	alert("Вы что не знаете что это ECMAScript? фу...");
}