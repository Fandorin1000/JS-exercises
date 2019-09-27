//Создайте функцию unique(arr),
//которая вернёт массив уникальных, не повторяющихся значений массива arr.

function unique(arr) {
    return Array.from(new Set(arr));
  }

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O