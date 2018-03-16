
//Look It Up!
//Warmup, Problem Solving, Programming Principles, Level 2
// Using objects, create a dictionary that allows a user to save words and their definitions and look them up again.
// Requirements:
// Create a function that:
// allows the user to enter new words and saves them into your object (be sure to pass the object in as a parameter). Does not allow duplicate words to be stored in the dictionary. This includes case-sensitivity.
// Allows the user to look up words in the dictionary and see the definition of that word.
// Extra-extra-credit:
// Do not allow any variation of the word to be saved as a duplicate. For example, if "brick" was entered your dictionary would reject "bricks" as a new word.

// Buat fungsi yang:
// memungkinkan pengguna untuk memasukkan kata-kata baru dan menyimpannya ke objek Anda (pastikan untuk memasukkan objek sebagai parameter). Tidak mengizinkan kata-kata duplikat untuk disimpan dalam kamus. Ini termasuk sensitivitas kasus.
// Memungkinkan pengguna untuk mencari kata-kata dalam kamus dan melihat definisi kata itu.
//sudocode :
//make a function new word
//make an object as parameter


var dictionaryEng = {};

function lookItUp(word, def, dictionary){
    if(dictionary.hasOwnProperty(word)){
        return dictionary[word] = def;
        return true;
    }
}
var dictionaryEng = {};

console.log(lookItUp("absquatulate","verb: to leave abrutly", dictionaryEng));
console.log(dictionaryEng.absquatulate);

//or we can make like this ://using javascript constructor

var Dictionary = function(language){
    this.language = language;
    this.content = {}
}
dictionary.prototype.addWord = function(word, def){
    word = word.tolowerCase();
    if (this.content.hasOwnProperty(word)){
        throw "THat word already exist"
    } else {
        this.content[word] = def;
    }
}

// function newWord(new){
//     var dictionary = new object;  //or empty array  var dictionary = {};
//     var dictionary = {
//         firstName: "Anik",
//         "one": 1,
//         1: "some value"
//     };
// //This can be done by either setting the values using the Object's Indexer property, or just calling it directly as if it were a standard property on the object. As you'll see below the Key values can be any object and are not limited to Strings.

// //Hal ini dapat dilakukan dengan menetapkan nilai menggunakan properti Indexer Objek, atau hanya menelponnya secara langsung seolah-olah itu adalah properti standar pada objek. Seperti yang akan Anda lihat di bawah nilai Kunci dapat berupa objek apa pun dan tidak terbatas pada String.

// //using the indexer
// dictionary["one"] = 1;
// dictionary[1] = "one";
// }
// //direct property by name
// //because its dynamic language
// dictionary.FirstName = "Anik";

//Iterating Key/Value Pairs
// A simple JavaScript "for" loop can be used to iterate through your new dictionary.

// function newWord(new){
//     var dictionary = new object;  //or empty array  var dictionary = {};
//     var dictionary = {
//         firstName: "Anik",
//         "one": 1,
//         1: "some value"
//     };
//     dictionary["one"] = 1;
// dictionary[1] = "one";
// }
// dictionary.FirstName = "Anik";
// //======================================================

// function CreateDictionarywithObject() {
//     var objDictionary = new Array();
//     // Creating a dictionary which is holding five objects

//     for (var i = 0; i < 5; i++) {

//         var obj= new myClass();
//         obj.member1 = 'member1data' + i;
//         obj.member2 = 'member2data' + i;
//         obj.member3 = 'member3data' + i;

//         objDictionary['Obj' + i] = obj;
//     }
//     //Fetching third Object
//     var fetchedObj = objDictionary['Obj3'];
//     alert(fetchedObj.member1);
//     alert(fetchedObj.member2);
//     alert(fetchedObj.member3);
