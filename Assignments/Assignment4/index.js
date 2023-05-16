function attachEventListeners() {
    let btn = document.getElementById("btn");
    let con = document.getElementById("content");
    let input = document.getElementById("input");
    btn.addEventListener("click", function xyz() {
        if (input.value!="") {
            con.innerHTML = input.value;
            input.value = "";
        }
    });
}
attachEventListeners();