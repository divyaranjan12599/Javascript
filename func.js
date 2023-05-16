// Function Statement and Function Declaration
function f(){
    return;
}
console.log(f());
// Hoisting is different for both
// Function Expression
var a = function () {
}

//Named Function Expression
var b = function xyz() {
    console.log(b,xyz);
}
b();
console.log(b);
// Anonymous Function : function with no name
// function () {
// }

// First Class Function : Ability to be used like values
// First Class Citizens

var f = (name)=>{
    console.log(name);
}

var ex = (fn,name)=>{
    fn(name);
}

ex(f,"asdf");

var add = function() {
    //console.log(arguments);
    let sum=0;
    for (let index = 0; index < arguments.length; index++) {
        sum += arguments[index];
        //console.log(arguments[index],sum);
    }
    return sum;
}

console.log(add(10,2,3,4,5,6));