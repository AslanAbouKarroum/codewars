// You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!


// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

// My Solution
function getLengthOfMissingArray(arrayOfArrays) {
    if(!arrayOfArrays) return 0;
    if(!arrayOfArrays.length){
        console.log('first if')
        return 0;
    } 
    if(arrayOfArrays.filter(e=>!e||e.length==0).length) {
        console.log('second if')
        return 0;
    } 
    let s=0;
    arrayOfArrays.map(e=> e.length).sort((a,b)=>a-b).forEach((e,i,ar)=>{
        if(ar[i+1]-e ==2) s=  e+1;
    })
    return s;
}
