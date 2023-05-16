function Recipe(name,price){
    this.name = name;
    this.price = price;
    this.changePrice = function(newPrice){
        this.price = newPrice;
    };
}

var r1 = new Recipe("Dosa",100);
r1.changePrice(90);
console.log(r1.price);

function HotelManager(name){
    this.name = name;
}
var manager = new HotelManager("Mike");
manager.changePrice = r1.changePrice;
manager.changePrice.call(r1,101);

console.log(manager);
console.log(r1.price);

