function sumPrompt() {
	let numbers = []

	while (true) {

		let enterNumber = prompt("введите число", "");

		if (enterNumber === "" || enterNumber === null || !isFinite(enterNumber)) break;

		numbers.push(+enterNumber);
	}

	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum;
}
alert(sumPrompt());