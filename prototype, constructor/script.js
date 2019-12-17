function Car(mark, year, color) {
    this.mark = mark;
    this.year = year;
    this.color = color;
}

Car.prototype.start = function () {
    console.log(this.mark + " is starting");
}
Car.prototype.stop = function () {
    console.log(this.mark + " Car is stop");
}

let ferrari = new Car("ferrari", 2019, "red");
ferrari.start();
ferrari.stop();

function ExclusiveFerrari(mark, year, color, speed) {
    Car.call(this, mark, year, color);
    this.speed = speed;
}

ExclusiveFerrari.prototype = new Car();
ExclusiveFerrari.prototype.constructor = ExclusiveFerrari;

let exFer = new ExclusiveFerrari("ferrari", 2020, "red", 400);
exFer.start();
exFer.stop();





