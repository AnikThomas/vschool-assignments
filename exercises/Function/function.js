//A function is a stored procedure :
//USE SUDOCODE!!!!!!!!!!!
//two parts:
// 1. definition
    //  define all the necessary steps and "ingridients"
// 2. execution
    // perform the procedure when called upon

// Write an even function that accepts one number as a parameter, and returns true

function even(num1){
    if(num1%2===0) {
        return "true";
    } else {
        return "false";
    }
}
// console.log(even(4));

//make a function add 
function addTwoTo(num){
    num += 2;
    // num = num + 1;
}

//Write a function that accepts two numbers as parameters, and returns the sum.
var sum = function(num1,num2){
    return num1+num2;
}
console.log(sum(5,7));

//Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
var largestNumber = function (num1,num2,num3){
   if(num1 > num2) {
    if (num1 > num3){
        return num1;
    }
    return num3;
   } else {
       if(num2 > num3){
        return num2;
       }
       return num3;
   }
}
console.log(largestNumber(4,5,8));

//Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function evenOdd(num1){
    if(num1%2===0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(evenOdd(4));

//Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

//function longString(onlyString) {
    // var splitString = onlyString.split("");

    
//     if (splitString.length <= 20) {
//          var joinString = splitString.join("");
//          var doubleString = joinString + " " + joinString;
//         return doubleString;
//     } else {
//          var halfString = "";
//     for(var i = 0; i < (splitString.length / 2); i++){
//          halfString += splitString[i];}
//         return halfString;
//     }
// }
// console.log(longSnotring(onlyString));
//================================================================================
//Optional Challenge
// Write a function that accepts a number ‘n’ as a parameter. Then print the         first ‘n’ Fibonacci numbers and return their sum
function fibonacciNumbers(n){
    var currentNumber = n;
    var newNumber = 0;
    var lastNumber = 0;
    var total = 0;
    var sentance = "";
    
    for(var i = 0; i < n; i++){
      lastNumber = currentNumber;
      currentNumber = newNumber;
      newNumber = currentNumber + lastNumber;
      total += newNumber;
      sentance += newNumber.toString() + "  ";
    }
  return sentance + total;
  
}
console.log(fibonacciNumbers(3));

//Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)
function quadraticFormula(a,b,c){
    var positiveX = ((-b + (Math.sqrt(b * b) - 4 * a * c))/2 * a);
    var negativeX = ((-b - (Math.sqrt(b * b) - 4 * a * c))/2 *a);
    return [positiveX, negativeX];
    }
  
//   console.log(quadraticFormula(2,3,5));
  
// Write an even function that accepts one number as a parameter, and returns true

function even(num1){
    if(num1%2===0) {
        return "true";
    } else {
        return "false";
    }
}
// console.log(even(4));


