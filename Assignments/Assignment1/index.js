function attachEventListeners() {
    let btn = document.getElementById("btn");
    let con = document.getElementById("content");
    btn.addEventListener("click", function xyz() {
        if (btn.textContent=="show" && con.style.display=="none") {
            btn.textContent="hide";
            con.style.display="block";
        } else {
            btn.textContent="show";
            con.style.display="none";
        }
    });
}
attachEventListeners();