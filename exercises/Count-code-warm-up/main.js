
// Write a function that returns the number of times that the string "code" appears anywhere in the given string, except       we'll accept any letter for the "d", so "cope" and "cooe" would also count.
// countCode("aaacodebbb") -> 1 
// countCode("codexxcode") -> 2 
// countCode("cozexxcope") -> 2



var code = "codexxcode";
var code = "aaacodebbb"; 
var code = "cozexxcope";
function countCode(str){
    var stringCode = code.match(/co.e/gi).length;
    return stringCode; 
    

}
//another way
//find "code" in string:

var countCode = function (str){
    var count = 0;
    for (var i=0; i < str.length - 3; i++){
        if (str[i] + str[i + 1] + str[i + 3] === "coe"){
            count++;
        }
        return count;
    }
}

// console.log(countCode(code));

// regEx.exec

function countCode(str) {
    var count = 0;
    var regEx = /co\we/g
    //we know that the index is tracked with every regex.exec call
    //we know that if there is no match it returns null
    while(regEx.exec(str)){
        count++;
    }
    return count;
}
console.log(countCode("codecofecorecoe"))

