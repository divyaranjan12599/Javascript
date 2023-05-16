myAr = [10,20,"Hello"];

function f(item,index,arr){
    console.log(typeof item, item, index);
}

myAr.forEach(f);

var i =0;
function f1(){
    i++;
    console.log(i);
}

myAr.forEach(f1);