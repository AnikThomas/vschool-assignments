
// //Write a function that accepts two numbers as parameters & returns the sum
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

// //Write a function that accepts three numbers as parameters & returns the largest of those numbers
function numbers(1,2,3){
    if(a >= b && a >= c)
        return a;
    else if (b >= c)
        return b;
    else
        return c;
    
// }

Var numbers = [100,200,300];
var max = 0;
for(var i=0; i<numbers.length; i++){
    if(numbers[i]> max){
        max = numbers[i];
    }
}


// //FUNCTION EXAMPLE !!STUDY
var titleCaseAllArrayItems = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var currMovie = arr[i];
        var titleCased = titleCaseIt(currMovie);
        console.log(titleCased);
    }
}



var titleCaseIt = function(str) {
    return str.split(" ").map(function(item) {
        return item[0].toUpperCase() + item.slice(1);
    }).join(" ");
}

var movies = ["a river runs through it", "star wars", "step brothers", "the matrix"]
var books = ["a river runs through it", "star wars", "where the red fern grows", "moby dick"];

titleCaseAllArrayItems(movies);
titleCaseAllArrayItems(books);
//================================================================================

// Write a function that accepts two numbers as parameters & returns the sum
    function sum(num1,num2){
        return num1 + num2;
    }

//Write a function that accepts three numbers as parameters & returns the largest of those numbers
    function largestNumber(num1,num2,num3){
         if (num1 > num2 && num1 > num3){
                return num1;
         }
        else if (num2 > num3) {
                return num2;
          } else {
                 return num3;
         }
}       

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

    function evenOdd(number){
        if( number % 2 === 0){
             return "even";
        } else {
            return "odd";
        }  
    }
 // Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string. 
 
    function charactersLong(str){
        if( str.length <= 20){
            return str + str;
        } else {
            return str.slice(0,str.length/2);
        }  
    }


// OPTIONAL CHALLENGE
// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.

    function fibonacciNumbers(n){
        var number = 0;
        var number2 = 1;
        for(i= 0; i< n; i++){
            var temporary = number2;
            number2 = number + number2;
            number = temporary;
            console.log(number);
        }
    }
    // fibonacciNumbers(5);

// Write a function to solve the quadratic equation. (It should accept three numbers as parameters, and then return an array with the resulting x values.)
    function quadraticEquation(a,b,c){
        var x = (-b + Math.sqrt(b * b- 4 * a * c))/ 2*a;
        var y = (-b - Math.sqrt(b * b- 4 * a * c))/ 2*a;
        return [x,y];
    }
    // quadraticEquation(2,4,6);


// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.
    function frequency(str){
        var result = str[0]; // first letter of str
        var storage = 0; // store biggest found number
       for (i=0 ; i < str.length ; i++){
            var berapa = countLetter(str[i],str);
            if(berapa > storage){
                result = str[i];
                storage = berapa;
            }
       }
       return result;
    }
    // console.log( frequency("food"));



// My own exercise of squareRoot ; what is the square root of some number ?
    function sRoot(number){
        return Math.sqrt(number);
    }
    // console.log(sRoot(4));

//square some number and then divide by two and return the result!
    function squareSomeNumber(number){
        return Math.pow(number,2)/2;
    }
    // squareSomeNumber(4);

//take some number and add to another number times 4 and divided all by 2!
function miniQuad(number1,number2){
    return (number1+number2*4)/2;
}
// miniQuad(4,6);

// write a function that count occurances of a letter in a word!
    function countLetter(letter,word){
        var count = 0;
        for(i=0 ; i < word.length ; i++){
            if(letter === word[i]){
                count++;
            }
        }
      return count;  
    }

    // countLetter("o","food");