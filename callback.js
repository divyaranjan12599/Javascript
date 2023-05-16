// Callback Function

var a=10;

function x() {
    var b=20;
    return function(){
        b++;
        a++;
        console.log(b);
        console.log(a);
    }
}

// var x1 = x();
// x1();
// var x2 = x();
// x2();

var person = {
    fname:"Divyaranjan",
    lname:"Parida",
    getName:function(){
        return this.fname+" "+this.lname;
    }
}

// console.log(person.getName());
// console.log(person.fname);

function personFunc() {
    var fname = "Divyaranjan";
    var lname = "Parida";
    return {
        getName:function () {
            console.log(fname+" "+lname);
        }
    }
}

// var p1 = personFunc();
// p1.getName();
// console.log(p1.fname);

var i;

function print(){
    console.log(i);
}

for (i = 0; i < 10; i++) {
    //console.log(i);
    //setTimeout(print,1000);
    (function(curI){
        //var curI=i;
        setTimeout(function(){
            console.log(curI);
        },1000);
    }
    )(i);
}