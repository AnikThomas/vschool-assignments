//loop the string
//for each letter, add to its count

//output
// var output = {
//     s:3,
//     l:4,
//     i:2,
//     m:2,
// }

// //input string
// var input = "i don't know what my output object will look like : $"
// var output = {};

// // for (var i = 0; i<input.length; i++){
//     // var currentLtr = input[i];
//     //output[currentLtr] = //some value;
// // }

// var ltr = "a";
// output[ltr] = 0;
// console.log(output);
// if(output.hasOwnProperty(ltr)){
//     console.log(output[ltr]);
// }else {
//     console.log("object doesn't have that property")
// }

//SUDOCODE :
//loop the string
//for each letter, add to its count

//output :

var phrase = "slimy smelly solution";
    var outPhrase = {};

  function countString(str){
      for( var i=0; i<str.length; i++){
          if (outPhrase.hasOwnProperty(str[i])){
              outPhrase[str[i]]++;
          }else {
              outPhrase[str[i]]=1;
          }
      }
      return outPhrase;
  }  

  console.log(countString(phrase));





//     input phrase string
// for ( var i = 0; i<phrase.length; i++){
// var currentWord = phrase[i];
// OutPhrase[currentWord] = // some value;

// var ltr ="l";
// Outphrase[ltr] = ;
// console.log












// Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string.
// function frequency(str){
//     var result = str[0]; // first letter of str
//     var storage = 0; // store biggest found number
//    for (i=0 ; i < str.length ; i++){
//         var berapa = countLetter(str[i],str);
//         if(berapa > storage){
//             result = str[i];
//             storage = berapa;
//         }
//    }
//    return result;
// }
// // console.log( frequency("food"));


















