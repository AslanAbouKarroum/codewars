// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// Valid arrays

// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]

// Invalid arrays

// [1, -9] is invalid because -9 is not a non-negative integer

// [1, 2, 33] is invalid because 33 is not a single-digit integer

// The solution
function upArray(arr){
    if(arr.filter(e=>e>9||e<0).length !==0) {return null};
    if(arr.length ==0) return null;
    if(arr.filter(e=>e==9).length == arr.length) return (Number(arr.join(''))+1+'').split('').map(e=>Number(e));
    if(arr.filter(e=>e==0).length == arr.length){
        arr.pop()
        let n = [1]
        return arr.concat(...n)
    };
    let last_of_arr = arr.slice(arr.findLastIndex((e,i)=>e!==9))
    return (arr.slice(0,arr.findLastIndex((e,i)=>e!==9))).concat(...(Number(last_of_arr.join(''))+1+'').split('').map(e=>Number(e)));
};