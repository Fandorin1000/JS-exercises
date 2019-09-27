function filtering(arr, a, b) {
	return arr.filter(item => (a <= item && item <= b) );
}

let arr = [5, 3, 8, 1];

let filtered = filtering(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)