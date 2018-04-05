// Write two functions that mimic the .every and .some array methods.
// every(arr, callback): Given an array and a callback function, return true or false based on whether each element of the array, when inserted as a parameter to the callback, returns true.

//every
//Check every item in the array against the callback
//bail as soom as one of them is false
//else return true

const every = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (!cb(arr[i]))
            return false;
    }
    return true;
}
console.log(every([1, 2, 3, 4], num => num % 2));
console.log(every([1, 2, "hi"], num => typeof num === 'number'));

const some = (arr, str, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) return true;
    }
    return false;
}

//console.log(some([0, 2, 4, 6, 8], num => num % 2));
console.log(some(["ben", "jacob", "bob"], "steven", (test, str) => test === str));


