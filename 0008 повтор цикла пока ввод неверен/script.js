var i = 0;
while (true) {
	var value = +prompt("enter number > 100", "101");
	if (value <= 100) {
		alert("введите цифру еще больше");
	} else if (value > 100)	break;
}
alert("number: " + value + " thank you");
