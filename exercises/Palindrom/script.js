// Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.
// A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.

//SUDOCODE :
//install npm --save chai, mocha,module.exports
//mocha
//despite letter capitalization
//take out the spaces 


   //string imutable mean you can't change the string,either you have to set as a new var or i can just say forget the original version and make the new version
function isPalindrome(str){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
     //lowercase all letters, 
    str = str.toLowerCase();

    //remove any symbols //remove any spaces
    str = str.replace(/\W+/g, ""); //to match any word,capital & space including whitespace
    var normalized ="";
    for (var i=0; i < str.length; i++){
        if(alphabet.indexOf(str[i]) !== -1){  //indexOf or we can use method includes
            normalized += str[i];
        }
    }
    console.log(normalized);
//=============================================================

    var reverseSTR = normalized.split("").reverse().join("");
    for (var j = normalized.length -1; j >= 0; j--){
        reverseSTR += normalized[j];
    }
    return normalized === reverseStr;
    console.log(isPalindrome("I'm A STR!!ing"))
}
module.exports = isPalindrome;


string.prototype.replaceAll =(function(search, replacement){
    var target = this;
    return target.split(search).join(replacement);

})

function isPalindrome(str){
    var cstr = str.toLowerCase().replace(/[^a-zA-Z0]+/g,'');

}

function isPalindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            alert("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                alert("Entry is a palindrome.");
                return true;
            } else {
    // If the length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                alert("Entry is not a palindrome.");
                return false;
            }
        }
        alert("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('madam');
    check_Palindrome('nurses run');
    check_Palindrome('fox');