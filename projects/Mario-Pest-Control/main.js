
var form = document.getElementById("belle");
var Goomba = document.getElementById("Goomba");
var myGoombaCost = document.getElementById("myGoombaCost");
var kingBob = document.getElementById("kingBob");
var kingBobCost = document.getElementById("kingBobCost");
var cheepCheeps = document.getElementById("cheepCheeps");
var cheepCheepsCost = document.getElementById("cheepCheepsCost");
var totalPrice = document.getElementById("totalPrice");


//sudocode
//make a function of count goomba and event as the parameter 
//and setmygoombaCost value to the event target value times 5,
//and console the grand total price

function countGoomba (event){
    myGoombaCost.value = event.target.value * 5;  // it takes what is in the goomba input box and multiple by 5 and store its in the box sum
    grandTotalPrice(); // call the grand total price function
}
Goomba.addEventListener("input",countGoomba); //add event listener define the event and pass it to count goomba

function countKingBob (event){
    kingBobCost.value = event.target.value * 7;
    grandTotalPrice();
}
kingBob.addEventListener("input",countKingBob);

function countCheepCheeps(event){
    cheepCheepsCost.value = event.target.value * 11;
    grandTotalPrice();
}
cheepCheeps.addEventListener("input",countCheepCheeps);

function grandTotalPrice (){
    totalPrice.innerHTML=parseInt(myGoombaCost.value) + parseInt(kingBobCost.value) + parseInt(cheepCheepsCost.value)
    // taking the 3 store value in all of sum boxes converting them to numbers and add them together and storing that in the total price div. ()

    //parseInt : convert string to number 
    //parseFloat : convert a string to decimal number
}





