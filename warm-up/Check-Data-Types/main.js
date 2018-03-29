
//======================================================================================
// Given a multi-dimensional array containing only primitive data types (strings, booleans, and numbers), write a function that returns whether EACH element within each subarray belongs to the same data type.
//===================================================================================
//SUDOCODE:
//mapped through input to pull out the type from indices
//we set a variable true that we will set to false later if we are proven wrong
//we loop through new array,check if new array[0]!==current data type and we haven't already set
//======================================================================================
// for example:
function checkTypes(arr) {  
    // Code here
}
const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]  
checkTypes(multiD1) 

// returns false (inner arrays aren't consistent with each other's data types)
const multiD2 = [[true,false,true],[false,false,true]]  
checkTypes(multiD1)  
// returns true (each inner array contains the same data type as the others)
//=========================================================================================

//ANSWER:======>
const multiD1 = [
    [1,2,3],
    ["a","b","c"],
    [true, true, true]

];  

const multiD2 = [
    [true,false,true],
    [false,false,true]
];

const checkDataTypes = input =>{
    const test = input[0][0];
    for(let i=0; i<input.length; i++){
        for(let j=0; j<input[j].length; j++){
            if(typeof test !== typeof input[i][j]){
                return false;
            }
        }
    }
    return true;
}
console.log(checkDataTypes(multiD2));
//=================================================================

//breakdown the code, it will be :
const checkDataTypesEvery = input =>
    input.every(subArr =>
        subArr.every(item =>  //item is subArray [i]
            typeof item ===typeof input[0][0]));

        





















