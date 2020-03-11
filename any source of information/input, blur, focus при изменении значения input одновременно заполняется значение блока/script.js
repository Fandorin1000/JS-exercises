let form = document.getElementById("form");
let name = document.form.name;
let nameText = document.getElementById("nametext");
let error = document.querySelector(".error");

function input(e) {
    nameText.textContent = e.target.value;
}
function focus(e) {
    e.target.style.outline = "1px dashed red";
    error.innerHTML = "";
}
function blur(e) {
    if (e.target.value.length < 5 && e.target.value.length !== 0) {
        error.innerHTML = "Введи больше 5 символов и мы тебя не тронем";
    }
    e.target.style.outline = "";
}

name.addEventListener("focus", focus);
name.addEventListener("blur", blur);
name.addEventListener("input", input);