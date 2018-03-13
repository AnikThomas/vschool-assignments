 //sudocode
 //loop through each letter in the string
 //at each letter determine if it is capital or lowercase
 //adjust the letter accordingly
 //return new string
 var antiCaps = function(str) {
    if (!str && str.length <= 0) {
            console.log('Please use a string');
    }
        var newStr = '';
        for (var i = 0; i < str.length; i++) {
        var letter = str[i];
        if(str[i]=== str[i].toUpperCase()){
       newString += str[i].toLowerCase();
        }else{
            newstring +=str[i].toUpperCase();
        }
    }
        return newString;
}

console.log(reverseCaps("DaiolHHijh"));
// =======================================================================

// function isCaps(letter) {  
//         return letter === letter.toUpperCase();
//       }
//     if (isCaps(letter)) {
//         letter = letter.toLowerCase();
//     } else {
//         letter = letter.toUpperCase();
//     }
//          newStr += letter;
//     }
//     return newStr;
//     };
    
// console.log(antiCaps('NameTocapiTALIZe'));  
