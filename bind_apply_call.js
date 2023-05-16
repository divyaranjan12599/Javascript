function x(greet,id){
    return greet+" "+this.firstName+" "+this.lastName+" "+id;
}

obj = {
    firstName:"Bharat",
    lastName:"Kamal"
}

console.log(x.call(obj,"Hello",103748));
console.log(x.apply(obj,["Hello",103748]));

var func = x.bind(obj,"Hello",103748);
console.log(func());

//IIFE
(function iife(){
    console.log("This is log without func call ")
})()