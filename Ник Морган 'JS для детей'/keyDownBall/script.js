let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;

let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

let Ball = function () {
    this.x = width / 2;
    this.y = height / 2;
    this.xSpeed = 5;
    this.ySpeed = 0;
};

Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.x < 0) {
        this.x = width;
    } else if (this.x > width) {
        this.x = 0;
    }
    if (this.y < 0) {
        this.y = height;
    } else if (this.y > height) {
        this.y = 0;
    }
};

Ball.prototype.draw = function () {
    circle(this.x, this.y, 10, true);
};

Ball.prototype.setDirection = function (direction) {
    if (direction === "up") {
        this.xSpeed = 0;
        this.ySpeed = -5;
    } else if (direction === "down") {
        this.xSpeed = 0;
        this.ySpeed = 5;
    } else if (direction === "left") {
        this.xSpeed = -5;
        this.ySpeed = 0;
    } else if (direction === "right") {
        this.xSpeed = 5;
        this.ySpeed = 0;
    } else if (direction === "stop") {
        this.xSpeed = 0;
        this.ySpeed = 0;
    } else if (direction === 1) {
        this.xSpeed *= 2;
        this.ySpeed *= 2;
    } else if (direction === 2) {
        this.xSpeed *= 3;
        this.ySpeed *= 3;
    } else if (direction === 3) {
        this.xSpeed *= 4;
        this.ySpeed *= 5;
    } else if (direction === 4) {
        this.xSpeed *= 5;
        this.ySpeed *= 5;
    } else if (direction === 5) {
        this.xSpeed *= 6;
        this.ySpeed *= 6;
    }
};

let keyActions = {
    32: "stop",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    49: 1,
    50: 2,
    51: 3,
    52: 4,
    53: 5
};

let ball = new Ball();

$("body").keydown(function (event) {
    let direction = keyActions[event.keyCode];
    ball.setDirection(direction);
});

setInterval(function () {
    ctx.clearRect(0, 0, width, height);

    ball.draw();
    ball.move();

    ctx.strokeRect(0, 0, width, height);
}, 30);

