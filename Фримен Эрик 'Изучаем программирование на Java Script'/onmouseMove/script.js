window.onload = init;

function init() {
    let map = document.getElementById("ukraine");
    map.onmousemove = showCoordinats;
};
function showCoordinats(e) {
    let coordinats = document.getElementById("coordinats");
    let x = e.clientX;
    let y = e.clientY;
    coordinats.innerHTML = "Coordinats mouse" + "Y:" + y + "X:" + x;
};
