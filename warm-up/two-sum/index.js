//QUESTION !!!!!
//Two Sum
//Given an array of integers and a target integer, return the indices of the two numbers which add up to the target.
// Assume there is exactly one solution, and that the same element may not be used twice.
// twoSum([1,2,3], 4);  
//returns [0, 2] because 1 + 3 equals 4

//SudoCode:
//take the first number in array,
//look through the rest of the array
//find the numbers that add up to target
//rinse and repeat for each number in array


let twoSum =(array, target)=>{
    let result =[]
    for (let i=0; i< array.length - 1; j++){
        for (let j = i + 1; j<array.length; j++){
            if(array[i] + arr[j] === target){
               return [i,j];
            }
        }
    }
}
console.log(TwoSum [1,2,3,0],5);


