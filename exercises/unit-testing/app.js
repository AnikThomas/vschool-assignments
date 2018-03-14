
// var assertEqual = function(actual, expected){
//     return actual === expected;
// }
// console.log(assertEqual(4,4));


// var asserEqual = function(actual, expected){
//     if(actual !== expected){
//         throw {type: "fail", details: {actual: actual,expected: expected, msg: "Expected" + actual + "To equal " + expected}};
//     } else {
//     console.log("success!",{type:"success",details:{actual: actual, expected: expected}});
// }
//     }
// function describe(message, testFunc){
//     console.log("Test being run: " + message);
//     try{
//         testFunc();
//     }catch(err){
//         console.log(err);
//     }

// }

// function sum(x,y){
//     return x + y;
// }

// describe("sum function", function(){
//     assertEqual(sum(6,4), 10); // (6,4 => is actual  10=>expected)
// });

function helperCallbForFilt (strInp) {
    var countC = 0;
    var countO = 0;
    var countE = 0;
    for (var i = 0; i < strInp.length; i++) {
        if (strInp[i] === "c") {
            countC++;
        } else if (strInp[i] === "o") {
            countO++;
        } else if (strInp[i] === "e") {
            countE++;
        }
    }
    if ((countC + countE + countO) % 3 === 0) {
        return (countC + countE + countO) / 3;
    }
 }

 module.exports = helperCallbForFilt;