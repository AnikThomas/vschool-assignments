
//preliminaries
for (var i=0;  i<10; i++){
    console.log(i);
}


for (var i=9; i>0; i--){
    console.log(i);
}

var fruits = ["banana","orange","apple","kiwi"];
for (var i=0; i<fruits.length; i++){
    console.log([i]);
}

//the end of preliminaries


//push numbers 0 to 9 Bronze
var numbers =[];
for(var i=0; i<10; i++){
    numbers.push(i);
}
console.log(numbers);

//the end of push numbers 0 to 9

// loop even numbers 0-100
var numbers =[];
for(var i=0; i<101; i=i+2){
    numbers.push(i);
}

//push for every fruits
var fruits =["banana", "orange", "apple", "kiwi", "pear", "peach"];
var arrayOfFruits=[];
for(var i=0; i<fruits.length; i=i+2){
    arrayOfFruits.push(fruits[i]);
}
console.log(fruits)


//Silver medal exercise
var peopleName =["Harrison Ford","Justin Bieber","Vladimir Putin","Oprah"];
for (var i=0; i<peopleName.length; i++){
    console.log(peopleName[i]);
}



