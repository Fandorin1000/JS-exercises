
let count = 0;
let message = document.getElementById("message");
let messageText = "You clicked on button ";
let button = document.getElementById("button");
button.onclick = function () {
    count++;
    message.innerHTML = messageText + count + " times";
}
//or
// button.onclick = click;
// function click() {
//     count++;
//     message.innerHTML = messageText + count + " times";
// }