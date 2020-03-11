let container = document.getElementById("container");
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.minHeight = "100vh";
container.style.textAlign = "center";
let div = document.createElement("div");
let h1 = document.createElement("h1");
let h2 = document.createElement("h2");
h1.textContent = "Create element";
h2.innerHTML = "Create element";
container.appendChild(div);
div.appendChild(h1);
div.appendChild(h2);
let img = document.createElement("img");
img.src="https://i.work.ua/employer_design/8/1/8/1500818_page_company_header_2.png";
img.style.width="100%";
img.setAttribute("alt", "bolt logo");
img.setAttribute("title", "cool green bolt logo");
div.appendChild(img);
img.onmouseover = function() {
    img.style.transform = "scale(1.1)";
    img.style.boxShadow = "0 0 10px 10px #bebebe"
}
img.onmouseout = function() {
    img.style.transform = "";
    img.style.boxShadow = ""
}
img.onclick = function(e) {
    console.log(e.clientY)
    
    img.style.filter = "blur(5px)";
    if(img.style.filter = "blur(5px)") {
        setTimeout( function() {
            img.style.filter = "";
        }, 1000);
        
    }
}
img.onscroll = function(e) { img.e}
console.log(img.e);



