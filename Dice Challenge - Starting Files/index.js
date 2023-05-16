
//Method1

var randomnumber1 = Math.floor(Math.random()*6 + 1);
var randomDice1 = "dice" + randomnumber1 + ".png";
var randomImageSource1 = "images/" + randomDice1; 
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource1);


var randomnumber2 = Math.floor(Math.random()*6 + 1);
var randomDice2 = "dice" + randomnumber2 + ".png";
var randomImageSource2 = "images/" + randomDice2; 
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


//Method2

// switch(randomnumber1){
    
//     case 1:
//         document.querySelector(".img1").setAttribute("src","images/dice1.png");
//         break;

//     case 2:
//         document.querySelector(".img1").setAttribute("src","images/dice2.png");
//         break;

//     case 3:
//         document.querySelector(".img1").setAttribute("src","images/dice3.png");
//         break;

//     case 4:
//         document.querySelector(".img1").setAttribute("src","images/dice4.png");
//         break;
    
//     case 5:
//         document.querySelector(".img1").setAttribute("src","images/dice5.png");
//         break;

//     case 6:
//         document.querySelector(".img1").setAttribute("src","images/dice6.png");
//         break;

// }

// switch(randomnumber2){
    
//     case 1:
//         document.querySelector(".img2").setAttribute("src","images/dice1.png");
//         break;

//     case 2:
//         document.querySelector(".img2").setAttribute("src","images/dice2.png");
//         break;

//     case 3:
//         document.querySelector(".img2").setAttribute("src","images/dice3.png");
//         break;

//     case 4:
//         document.querySelector(".img2").setAttribute("src","images/dice4.png");
//         break;
    
//     case 5:
//         document.querySelector(".img2").setAttribute("src","images/dice5.png");
//         break;

//     case 6:
//         document.querySelector(".img2").setAttribute("src","images/dice6.png");
//         break;

// }

if(randomnumber1>randomnumber2)
{
    document.querySelector(".container h1").innerHTML = "Player1 Wins!";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector(".container h1").innerHTML = "Player2 Wins!";
}
else{
    document.querySelector(".container h1").innerHTML = "Draw!";
}