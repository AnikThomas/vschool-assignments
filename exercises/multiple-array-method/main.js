//Return a list of everyone older than 18 sorted alphabetically by last name.
//The filter() method creates an array filled with all array elements that pass a test (provided as a function). ==> the method return true / false
//sort When the sort() method compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

function sortedOfAge(arr){
    var newArray = arr.filter(filterByAge);
    newArray.sort(function(obj,objAge) { // obj and objB ; is to compare
        return obj.age - objAge.age;  // returns a number greater then 0, less then 0, or 0, to determine how to sort, if positive number first parameter is first
    });

    return newArray;
}

function sortedOfAlphabetically(arr){
    var newArray = arr.filter(filterByLastName);
    newArray.sort(function(obj,objLastName){
        return obj.age - objAge.age;
    });

    return newArray;
}

function filterByAge(obj){
    return obj.age >= 18;
}

var peopleArray = [
    {   firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },{
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },{
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },{
        firstName: "Morty",
        lastName: "Smith",
        age: 13
    },{
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
];
console.log(sortedOfAge(peopleArray));

// Using the same array from the problem above, return a sorted list, youngest to oldest, of People in <li>s
// ["<li>Rick Sanchez is 78</li>", "<li>Sarah Palin is 47</li>", "<li>Kyle Mooney is 27</li>", "<li>Morty Smith is 13</li>", "<li>Frank Zappa is 12</li>"]  

//

function toDisplayInHTML(arr){
    arr.sort(function(obj,objAge) {
        return obj.age - objAge.age;
    });
    var newThing = arr.map(function(thing){//takes the original thing and replace with something else
        return "<li> " + thing.firstName + " " + thing.lastName + " is " + thing.age + " </li>";
    }
    );
    return newThing;
}

console.log(toDisplayInHTML(peopleArray));  

var age

//filter out objects with an age property >=18
//sort the result by last name
// use JavaScript String localeCompare() Method ()
//given two things,if the call back return the negative number switch that if return the positif)
// no.1
var age = (47,12,78,13,27);
function isOldEnough(person){
    return person.age >= 18;
}
function byAlpha(person1, person2){
    var ln1 = person1.lastName;
    var ln2 = person2.lastName;
    var ln3 = person3.lastName;
    return ln1.localeCompare(ln2);
}

function byAlphaAge(person1, person2){
    var age1 = person1.age;
    var age2 = person2.age;
    var age3 = person3.age;
    return age1.localeCompare(age2);
}

function sortedofAge(arr){
    return arr.filter(isOldEnough).sort(byAlpha);
}
console.log(sortedOfAge(data));

//Arrange by age first using sort
//transform each member of thes sorted array into a li string
//switch from older to youngest
//no.2 
function byAge(person1, person2){
    var age1 = person1.age;
    var age2 = person2.age;
    return age2 - age1;
}

function toLi(person){
    return "<li>" + person.firstName + " " + person.lastNAme + "is" + person.age + "<li>";
}

function ageSortLi(arr){
    return arr.sort(byAge).map(toLi);
}
 console.log(ageSortLi(people / data));


// how sort method works:
function sort(arr, cb){ //looping to the array and callback
    for(var i=0; i <arr.length; i++){
        cb(arr[i],arr[i + 1]);
    }
}
