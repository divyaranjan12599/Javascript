var redRadio = document.getElementById('blue');
let countBlue=0;
let countOrange=0;
var orangeRadio = document.getElementById('orange');
redRadio.onclick = function() {
    countBlue++;
    console.log(orangeRadio.checked,redRadio.checked);
    if (orangeRadio.checked) {
        orangeRadio.checked=false;
        countOrange=0;
    }
    if (countBlue%2===0) {
        console.log(countBlue);
        redRadio.checked=false;
    }
}
orangeRadio.onclick = function() {
    countOrange++;
    console.log(orangeRadio.checked,redRadio.checked);
    if (redRadio.checked) {
        redRadio.checked=false;
        countBlue=0;
    }
    if (countOrange%2===0) {
        console.log(countOrange);
        orangeRadio.checked=false;
    }
}
document.getElementById('btn').onclick = function() {
    var i = document.querySelector('input[id="italic"]:checked');
    var b = document.querySelector('input[id="bold"]:checked');
    var markedRadio = document.querySelector('input[type="radio"]:checked');
    var ps = document.getElementsByTagName('p');
    
    for(let p of ps){
        if (markedRadio) {
            p.style.backgroundColor = markedRadio.value;
        }
        else{
            p.style.backgroundColor = 'white';
        }

        if (i) {
            p.style.fontStyle = i.value;
        }
        else{
            p.style.fontStyle = 'normal';
        }

        if (b) {
            p.style.fontWeight = b.value;
        }
        else{
            p.style.fontWeight = 'normal';
        }
    }
}
