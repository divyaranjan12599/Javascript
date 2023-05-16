function attachEventListeners() {
    let flag = 0;
    var div = document.getElementById("xyz");
    let btn = document.getElementById("clickMe");
    btn.addEventListener("click", () => {
        if (flag) {
            flag = 0;
            var a = div.firstChild;
            console.log(a);
            div.removeChild(a);
        } else {
            flag = 1;
            console.log(div);
            var tag = document.createElement("p");
            var text = document.createTextNode("Something something something...");
            tag.appendChild(text);
            div.appendChild(tag);
        }
    });
}
attachEventListeners();