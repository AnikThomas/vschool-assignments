// Make a function that takes a string and returns that string with all instances of the letter 'a' removed. Must handle lowercase and uppercase letters.

var removeA = function(str){
    var result = str.replace (/A/ig,"");
    return result;
}

console.log(removeA("FAR OUT MAN"));