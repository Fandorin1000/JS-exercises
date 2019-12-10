window.onload = init;

function init() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showImage;
    }
}

function showImage(e) {
    let image = e.target;
    if (image.classList.contains("blurred")) {
        image.classList.remove("blurred");
    } else {
        image.classList.add("blurred");
        setTimeout(() => {
            image.classList.remove("blurred")
        }, 5000, e);
    };
}