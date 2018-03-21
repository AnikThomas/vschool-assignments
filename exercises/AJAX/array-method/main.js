var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array. 
var Remove = vegetables.pop();
console.log("fruits:", fruit);
console.log("vegetables: ", vegetables);//lettuce is remove from array

// Remove the first item from the fruit array. 
var removeFirstItem = fruit.shift();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

// Find the index of "orange."  
var indexOrg = fruit.indexOf("orange");
console.log(indexOrg);

// Add that number to the end of the fruit array.
fruit.push(index3);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

// Use the length property to find the length of the vegetable array. Log that to the console.
var veg = vegetables.length;
console.log(veg);

// Add that number to the end of the vegetable array.
vegetables.push(veg);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables)
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);
console.log("food: ", food);

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4,2)
console.log("food: ", food);

// Reverse your array.
food.reverse()
console.log("food: ", food);

// Log your array as a string to the console.
console.log("food: ", food);



