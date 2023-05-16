var bicycle1 = {
    price:10000,
    gear:4,
}

var bicycle2 = {
    price:5000,
    gear:1,
}

function createBicycle(price,gear) {
    var obj={};
    obj.price=price; 
    obj.gear=gear;
    return obj;
}

var bicycle3 = createBicycle(4000,1);

// console.log(bicycle1,bicycle2,bicycle3);

// class Bicycle {
//     constructor(price, gear) {

//         this.price = price;
//         this.gear = gear;

//     }
// }

function Bicycle(price,gear) {
    
    this.price=price; 
    this.gear=gear;
    
}

Bicycle.prototype.a=25;

var bicycle4 = new Bicycle(7000,3);

console.log(bicycle1,bicycle2,bicycle3,bicycle4);
