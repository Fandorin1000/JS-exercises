function filterRange(arr, a, b) {

	for(let i = 0; i < arr.length; i++)
	let val = arr[i];
	
	if(val < a || val > b ) {
		arr.splice(i, 1);
		i--;
	}
}
let arr = [5, 3, 8, 1];

filterRange(arr, 1, 4); // результат 1,3

alert( arr ); // 5,3,8,1