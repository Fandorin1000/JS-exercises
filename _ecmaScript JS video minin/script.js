//стрелочные функции

// const sum = (a, b = 5) => a + b;
// console.log(sum(1, 4));

// setTimeout( () => console.log('a'), 1000);

// function log () {
//     console.log(this);
// }
// const arrowLog = () => console.log(this);

// const person = {
//     name: 'Elena',
//     age: 20,
//     log: log,
//     arrowLog: arrowLog,
//     delayLog: function () {
//         setTimeout(() => {
//             console.log(`${this.name} ${this.age}`)
//         }, 500)
//     }
// }
// person.delayLog();

//default params
// const defB = 10;
// const getDef = c => c * 5;
// let compute = (a = 1, b = getDef(5)) => a + b;
// console.log(compute());

// strings 
// const title = "Hello"

// const isVisible = () => Math.random() > 0.5;
// const template = `
// ${isVisible() ?  `<p>Visible</p>` : " "}
// <h1>${title}</h1>
// `;
// console.log(template);

// const str = "Hello"

// console.log(str.startsWith("He")); // начинается ли строка с символов "Не"
// console.log(str.endsWith("o")); // заканчивается ли строка символом "о"
// console.log(str.includes("e")); // проверка подстроки в строке
// console.log(str.repeat(3)); // повтро строки 3 раза
// console.log(str.trim()); // удалить пробелы слева и справа
// console.log(str.trimEnd()); // удалить пробелы слева
// console.log(str.trimStart()); // удалить пробелы справа
// console.log(str.padStart(50, "аааааа")); // минимальное длинна строки (50), второй аргумент указывает какимми символами заполнить пробелы

//destructuring
const array = [1, 2, 3, 5, 8, 13]
//const a = array[0];
//const b = array[1];
// const [a, b] = array;
// const [a, b, ...c] = array;
// console.log(a, b, c);
// const [a, , c] = array;
// console.log(a,c);

//object
// const adress = {
//     country: "Ukraine",
//     city: "Kiev",
//     street: "Pobedu",
//     concat: function() {
//         return `${this.country}, ${this.city}, ${this.street}`
//     }
// }
// const {country, city, street, concat: adressConcat} = adress; // destructuring
// console.log(city);
// console.log(adressConcat.call(adress)); //call (this)
// console.log(adress.concat());
// const {city, ...rest} = adress;
// console.log(city);
// console.log(rest);
// const newAdress = {...adress, street: "square", code: 123}
// console.log({...newAdress})

// const job = "frontend";
// const cityField = "city";
// const person = {
//     name: "Alex",
//     age: "26",
//     job, // job: job => job
//     [cityField]: 'Irpin',
//     "country-live": "Ukraine",
//     toString() { // <= НОВОЕ без двоеточия и слова function
//         return Object
//             .keys(this)
//             .filter(key => key !== "toString")
//             .map(key => this[key])
//             .join(" ");
//     }
// }
// console.log(person.toString());
// console.log(person);

//methods objects
// const first = { a: 1 };
// const second = { b: 2 };

// console.log(Object.is(20, 10)); // одинаковые?
// console.log(Object.assign({}, first, {c: 2, d: 3})); /* объединяет обьекты( параметр {}
//позволяет создавать новый обьект не меняя старые которые обьединяет) третий параметр добавляет значения обьекта в конец*/
// console.log(first);

// const obj = Object.assign({}, first, {b:3, c:4});
// console.log(obj);
// console.log(Object.entries(obj))
// console.log(Object.keys(obj)) // вывод ключей обьекта
// console.log(Object.values(obj)) // вывод значений ключей

//CLASSES
class Person { // создание класса
    type = "human"
    constructor(name) { //создание конструктора командой constructor
        this.name = name;
    }
    greet() {
        console.log(this.name + ' hello')
    }
}
const max = new Person("Max");
// console.log(max.greet())
// console.log(max.type);

// console.log(max.__proto__ === Person.prototype); // проверка на прототип конструктора

class Programer extends Person { // extends наследует свойства Person
    constructor(name, job) {
        super(name)

        this._job = job
    }
    get job() { // getter обращение без скобочек
        return this._job.toUpperCase();
    }
    set job(job) { //setter, служит для инкапсуляции
        this._job = job;
    }
    greet() {//метод можно перезаписывать
        super.greet() // с помощью super можем вызывать унаследованый метод
        console.log("метод переписан") // унаследованый метод можно перезаписывать
    }
}

const frontend = new Programer("max", "frontend");
// console.log(frontend);
// console.log(frontend.greet());
// console.log(frontend.job());
// frontend.job = "first";
// console.log(frontend.job);

//Static
// class Util {
//     static average(...args) { //static позволяет напрямую обращаться к классу и вызывать нужный метод
//         return args.reduce((acc, i) => acc += i, 0) / args.length; // начинаем с 0, каждый элемент прибавляем к общаку
//     }   
// }
// const res = Util.average(1,1,2,3,5,8,13);
// console.log(res);
// const util = new Util();
// console.log(util.average(1,1,2,3,5,8,13));

//SYMBOLS 7 тип данных, абсолютно уникальны не равны друг другу
// const symbol = Symbol('demo');
// const other = Symbol('demo');
// console.log(symbol);
// console.log(other);
// console.log(symbol === other); false

// const obj = {
//     name: "Elena",
//     demo: "aaa",
//     [symbol]: "meta" //скрыт от метода for in
// }
// // console.log(obj[symbol]);

// for(let key in obj) { //не увидит [symbol]
//     console.log(key);
// }

//GENERATORS
const arr = [1, 2, 3, 4]
const str = "Hello"

// console.log(arr[Symbol.iterator]);
// console.log(str[Symbol.iterator]);

// const iter = str[Symbol.iterator]()
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for(let key of str) {
//     console.log(key);
// }

// const countries = {
//     values: ['ukr', 'uk', 'usa', 'china'],
//     [Symbol.iterator]() {
//         let i = 0
//         return {
//             next: () => {
//                 const value = this.values[i]
//                 i++
//                 return {
//                     done: i > this.values.length,
//                     value
//                 }
//             }
//         }
//     }   
// }

// for(let item of countries) {
//     console.log(item);
// }

//GENERATOR
// function *gen(num = 4) {
//     for(let i =0;i < num;i++) {
//         yield i
//     }
// }
// const iter = gen(3)
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

//PROMISE
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("After delay")
//         reject('succes')
//     }, 500);
// })

// const delay = ms => new Promise (((resolve,reject) => {
//     setTimeout(() => resolve('Done'), ms)
// }))
// delay(1000).then(data => console.log(data)) // получение данных
// .catch(err => console.log(err)) //запустит если будет ошибка
// .finnaly(() => console.log("finally")) //запустится даже в случае ошибки


