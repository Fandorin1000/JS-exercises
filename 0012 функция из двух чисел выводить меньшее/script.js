/*
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function showMin (a,b) {
	if (a < b) {
		alert(a);
	} else {
		alert(b);
	}
}
showMin(2, 5); //2
showMin(3, -1); //-1
showMin(1, 1); //1