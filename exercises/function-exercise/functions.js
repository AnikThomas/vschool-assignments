
//Write a function that accepts two numbers as parameters & returns the sum
function add(a,b){
    return a+b;
}
console.log(add(2,3));

//Write a function that accepts three numbers as parameters & returns the largest of those numbers
function numbers(1,2,3){
    if(a >= b && a >= c)
        return a;
    else if (b >= c)
        return b;
    else
        return c;
    
}

Var numbers = [100,200,300];
var max = 0;
for(var i=0; i<numbers.length; i++){
    if(numbers[i]> max){
        max = numbers[i];
    }
}


//FUNCTION EXAMPLE !!STUDY
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