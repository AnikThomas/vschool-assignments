
// // Try and Catch Fix This Code :
// //Fix each of the code sections below using try and catch.
// var myName = "John Doe";
// console.log(name);

// function movieCheck(age) {
//     if(age < 0){
//         throw "Error cannot be less than 0";
//     }else if(age <=12){
//         console.log("You can see PG movies");
//     }else if(age >= 13 && age < 18){
//         console.log("you can see PG-13 movies");
//     }else if(age >=18){
//         console.log("You can see R rated movies");
//     }
// }
// movieCheck(-1);
// //====================================================

// function movieCheck(age){
//     try{
//         // var myName = sendResponse();
//         // console.log(myName);
//         if(age < 0)throw 0;
//         if(age <= 12)throw "is You can see PG movies";
//         if(age >= 13 && )
//     }catch(err){
//         console.log(err);
//     }
// }
// ==================================================================================

// Try and Catch Fix This Code
// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

// function sum(x, y){  
//   //check data types first and throw error
//   return x + y;
// }
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

// var user = {username: "sam", password: "123abc"};  
// function login(username, password){  
//   //check credentials
// }
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!


// Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
function sum(x, y){  
    // check data type first and throw error ( to check the data type use the "type of")
    if(typeof x !== "number" || typeof y !== "number"){
        throw "input must be a number";
    }
    return x + y;
}
// Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
try{
    sum(1,2);
}catch (err){
    console.log(err);
}

var user = {username: "sam", password: "123abc"};  
function login(username, password){  
  //check credentials
  if(user.username !== username || user.password !== password){
      throw "wrong user name or password!"; // if you hit throw it will stop the function
  }
  return "login succesfull!"
   
}
try{ 
    console.log(login("sam","123abc"));    //try to check to see if something was error put the var that we want to check!
    
}catch (err){
    console.log(err);
}




