/*
"use strict";

let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

//... ваш код выведет 650 
*/

"use strict"

let salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250,
  "Миша": 0
};
let sum = 0;
for (let prop in salaries) {
	sum += salaries[prop];
}
alert(sum);

