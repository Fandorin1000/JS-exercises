function unique(arr) {
  let result = [];

  for(let item of arr) {
  	if (!result.includes(item)) {
  		result.push(item);
  	}
  }
  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O