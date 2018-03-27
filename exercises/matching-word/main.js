
//Matching Words refer from syllabus
//look thoriugh all the words using split
//for any given word, check if it appears more than once
//store duplicates to an array

const str =   "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo.                     Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up                   sriracha onthe saliva. Shabby on chic eu iceland far next level far                 lever pull drinking the right vinegar fanny pack pull minim right                   chicharrones migas."
//NEW WAY ES6
const matchWords = str => {
    const counts = {}; //store words we have seen
    const output = [];//store words that are duplicates
    str.replace(/[^a-z\s]/gi, "").toLowerCase().split(" ").forEach(str => {//replace that which is not a letter or a space,convert to all lowercase,devide it into an array,run a function on each part of the array
        if (counts.hasOwnProperty(str)) {//check to see if we have seen this word before
            if (!output.includes(str)) {//check to see if word is NOT already in the output array
                output.push(str);//adds word to the output array
            }
        } else {
            counts[str] = true;//add word to counts object
        }
    })
    return output;// return the output array
}
console.log (matchWords(str));

const matchWords = str => {
    const counts = {}; 
    const output = [];
    str.replace(/[^a-z\s]/gi, "").toLowerCase().split(" ").forEach(str => {
        if (counts.hasOwnProperty(str)) {before
            if (!output.includes(str)) {the output array
                output.push(str);
            }
        } else {
            counts[str] = true;
        }
    })
    return output;
}
console.log (matchWords(str));