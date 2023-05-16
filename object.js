obj={"prop":123};
obj.prop1=12;
obj.prop2="asdf";

// for (let i in obj) {
//     console.log(i);
// }

var s = "prop";
console.log(obj[s]);

// for (let i in obj) {
//     console.log(i+" : "+obj.i);
// }

// obj.prop=1;

for (let i in obj) {
    console.log(i+" : "+obj[""+i]);
}

obj.obj1={};

obj.obj1["something"]="something";

// console.log(obj.obj1);

obj.obj1["1"]='one';
console.log(obj.obj1["1"]);
console.log(obj.obj1);

obj.obj2 = ()=>{
    console.log("something");
};

console.log(obj.obj2());
console.log(obj.le);