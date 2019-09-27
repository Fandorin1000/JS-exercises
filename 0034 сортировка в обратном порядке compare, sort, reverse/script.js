let arr = [5, 2, 1, -10, 8];

 function compare(a, b) {
  if (a > b) return 1; 
  if (a == b) return 0; 
  if (a < b) return -1; 
}

arr.sort(compare).reverse();

alert( arr ); // 8, 5, 2, 1, -10