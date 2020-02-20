let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
let blockSize = 10;
let widthInBlocks = width / blockSize;
let heightInBlocks = height / blockSize;
let score = 0;

let circle = function (x, y, radius, fillCircle) {
    //создаём круг
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};
let drawBorder = function () {
    //создаю грани поля
    ctx.fillStyle = "gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
};
let drawScore = function () {
    //стилизация статуса игры
    ctx.fillStyle = "black";
    ctx.font = "20px Courier";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Score: " + score, blockSize, blockSize); // создаем текст на указанных кординатах blockSize
};
let gameOver = function () {
    //стилизация сообщения об окончании игры
    ctx.fillStyle = "red";
    ctx.font = "60px Courier";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("GAME OVER", width / 2, height / 2);
    setTimeout(function () {
        score = 0;
        snake = new Snake();
    }, 1000);


};

let Block = function (col, row) {
    //создаю конструктор на координатах col, row
    this.row = row,
        this.col = col
};

Block.prototype.drawCircle = function (color) {
    //рисую круг на указанных координатах с заливкой цвета color
    let centerX = this.col * blockSize + blockSize / 2;
    let centerY = this.row * blockSize + blockSize / 2;
    ctx.fillStyle = color;
    circle(centerX, centerY, blockSize / 2, true);
};

Block.prototype.drawSquare = function (color) {
    //рисую квадрат элемент блока
    let x = this.col * blockSize;
    let y = this.row * blockSize;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, blockSize, blockSize);
};
Block.prototype.equal = function (otherBlock) {
    //проверка совпадения
    return this.col === otherBlock.col && this.row === otherBlock.row;
};
let Snake = function () {
    //создание игрока на координатах
    this.segments = [
        new Block(7, 6),
        new Block(6, 6),
        new Block(5, 6)
    ];
    //движение направо в начале игры
    this.direction = "right";
    this.nextDirection = "right";
};
Snake.prototype.draw = function () {
    for (let i = 0; i < this.segments.length; i++) {
        this.segments[i].drawSquare("Blue");
    };
};
Snake.prototype.move = function () {
    let head = this.segments[0];
    let newHead;

    this.direction = this.nextDirection;
    //движение игрока (добавление к первому блоку новых)
    if (this.direction === "right") {
        newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === "down") {
        newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === "left") {
        newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === "up") {
        newHead = new Block(head.col, head.row - 1);
    };
    if (this.checkCollision(newHead)) {
        gameOver();
        return;
    };
    this.segments.unshift(newHead);
    if (newHead.equal(apple.position)) {
        score++;
        apple.move();
    } else {
        this.segments.pop();
    }
};
Snake.prototype.checkCollision = function (head) {
    //проверка на столкновение с границами поля
    let leftCollision = (head.col === 0);
    let topCollision = (head.row === 0);
    let rightCollision = (head.col === widthInBlocks - 1);
    let bottomCollision = (head.row === heightInBlocks - 1);
    let wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;
    let selfCollision = false;

    for (let i = 0; i < this.segments.length; i++) {
        if (head.equal(this.segments[i])) {
            selfCollision = true;
        }
    }
    return wallCollision || selfCollision;
};

Snake.prototype.setDirection = function (newDirection) {
    if (this.direction === "up" && newDirection === "down") {
        return;
    } else if (this.direction === "right" && newDirection === "left") {
        return;
    } else if (this.direction === "down" && newDirection === "up") {
        return;
    } else if (this.direction === "left" && newDirection === "right") {
        return;
    }
    this.nextDirection = newDirection;
};
let Apple = function () {
    this.position = new Block(10, 10);
};
Apple.prototype.draw = function () {
    this.position.drawCircle("LimeGreen")
};
Apple.prototype.move = function () {
    let randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
    let randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
    this.position = new Block(randomCol, randomRow);
};
let apple = new Apple();
let snake = new Snake();

let intervalId = setInterval(function () {
    ctx.clearRect(0, 0, width, height);
    snake.draw();
    drawScore();
    apple.draw();
    drawBorder();
    snake.move();
}, 100);

let directions = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
};
$("body").keydown(function (event) {
    let newDirection = directions[event.keyCode];
    if (newDirection != undefined) {
        snake.setDirection(newDirection);
    }
});




