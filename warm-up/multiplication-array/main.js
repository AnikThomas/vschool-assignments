//Multiplication Table
//Write a function the generates a 10 X 10 multiplication table (2D array).
// For example:
// multTable();  
// //returns
// [
//     [1,2,3,4,5...],
//     [2,4,6,8,10...],
//     [3,6,9,12,15...],
// ...
// ]

//SUDOCODE 
//make a container array for the nested arrays
//fill it with ten arrays
//fill each sub-array with 10 numbers incremented by the row number multiplied by column number
//return output array


// function multiplicationTable(clubs, indexes){
//     var array = [];
//     var clubs;
//     var indexes;
//     //-loop for the clubs
//     for (c=0; c < clubs; c++ ){
//         //-create multidimensional array
//         array[c] = [];
//         //-loop for the indexes of the each clubs
//         for (i=0; i < indexes; i++){
//             array[c][i] = (c + 1) * (i + 1);
//         }
//     }
//     return array;
// }

// console.log (multiplicationTable(2, 2));
// console.log(multiplicationTable(3, 4));
// //==========================================================

// let x = 10;
// let y = 10;
// let table = `<table></tr>`
// for(let i=0; i<x; i++){
//     table +=`<th>${i}</th>`;
// }

//=======================================
const genMultTable = (n) =>{
    const output =[];
    for (let i=1; i<=n; i++){
        const row =[];
        for (let j=1; j<=n; j++){
            row.push(j * i);
        }
        output.push(row);
    }
    return output;
}
console.log(genMultTable(10));
