// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

// My Solution
function dup(s) {
    return s.map((e,i,ar)=>e.split('').map((el,ind,arr)=>{if(ind==0){return el}else if(el==arr[ind-1]){return ''}else{return el}}).join(''))
};