// You will create three functions.
// The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console
// The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).
// The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.

var lyrics = ["This ", "hit ", "that ", "ice ", "cold ",  
"Michelle ", "Pfeiffer ", "that ", "white ", 
"gold ", "This ", "one ", "for ", "them ", 
"hood ", "girls ", "Them ", "good ", "girls ", 
"straight ", "masterpieces ", "Stylin '", 
"whilen '", "livin '", "it ", "up ", "in ", 
"the ", "city ", "Got ", "Chucks ", "on ", 
"with ", "Saint ", "Laurent ", "Gotta ", "kiss ", 
"myself ", "Im ", "so ", "pretty "]

//NO.1
//The first function will take this array,
//and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console
function getLyrics(arr) {
    return arr.join(' ')
   }

console.log (getLyrics(lyrics));
//console.log(lyrics.join(""));
//console.log(lyrics.reverse());


//No.2
// The second function will do the same thing, 
// but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).

function reverseSong(arr){
    arr.reverse();
    song = arr.join(' ');
    return song;
}
console.log(reverseSong(song));


//NO.3
//The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.

function getSongs(arr){
    songArr=[];
    for(var i=0; i < arr.length; i+=2){
        songArr.push(arr[i]);
    }
    return songArr.join(' ');
}
console.log(getSongs(lyrics));

