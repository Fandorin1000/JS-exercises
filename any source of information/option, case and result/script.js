function viewResult() {
    let resultText = document.getElementById("result");
    let select = document.getElementById("select");
    let num = +select.value;
    switch (num) {
        case 1: resultText.innerHTML = "1";
            break;
        case 2: resultText.innerHTML = "2";
            break;
        case 3:
            resultText.innerHTML = "3";
            break;
    }
}
document.getElementById("send").onclick = viewResult;
