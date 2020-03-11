function viewResult() {
    let resultText = document.getElementById("result");
    let selectOne = document.getElementById("select-one").value;
    let selectTwo = document.getElementById("select-two").value;
    let selectOperators = document.getElementById("select-operators").value;
    if (selectOperators == "&&") {
        resultText.innerHTML = selectOne && selectTwo;
    }
    if (selectOperators == "||") {
        resultText.innerHTML = selectOne || selectTwo;
    }
}
document.getElementById("send").onclick = viewResult;
