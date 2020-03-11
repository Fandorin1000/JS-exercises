let a = document.getElementsByTagName("a");
let body = document.getElementsByTagName("body");
window.onscroll = function (e) {
    for (let i = 0; i < a.length; i++) {
        let aElement = a[i];
        aElement.onclick = function (e) {
            console.log(e);
            if (e.screenY < 400) {
                aElement.style.transform = "scale(0)";
                aElement.style.position = "absolute";
                aElement.style.top = -1000 + "px";
            } else {
                e.target.classList.toggle("border");
            }
        }
        if (window.scrollY < 150) {
            aElement.style.transform = "scale(0)";
        } else {
            aElement.style.transform = "scale(1)";
        }
    }

}


