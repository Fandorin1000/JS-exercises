

let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();//начинаем рисовать
    ctx.arc(x, y, radius, 0, Math.PI * 2, false); // круг за счет матх.Пи * 2
    if (fillCircle) {
        ctx.fill(); // залить
    } else {
        ctx.stroke(); //по контуру
    }
};

let drawBee = function (x, y) {
    ctx.lineWidth = 2; // ширина линии
    ctx.strokeStyle = "black"; // цвет линии
    ctx.fillStyle = "gold"; //цвет заливки
    //отрисовка пчёлки кругами
    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x - 5, y - 11, 5, false);
    circle(x + 5, y - 11, 5, false);
    circle(x - 2, y - 1, 2, false);
    circle(x + 2, y - 1, 2, false);
}

let update = function (coordinate) {
    let offset = Math.random() * 4 - 2; // получаем случайное число от -2 до 2
    coordinate += offset;
    if (coordinate > 180) {
        coordinate = 180;
    } if (coordinate < 20) {
        coordinate = 20;
    }
    return coordinate;
};
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let x = 100;
let y = 100;

setInterval(function () {
    ctx.clearRect(0, 0, 200, 200); // очищаем полотно с каждым изменением координат
    drawBee(x, y);// определяем местонахождение всех кругов пчёлки
    x = update(x);
    y = update(y);
    ctx.strokeRect(0, 0, 200, 200);
}, 30);