// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

// My Solution
function deepCount(a){
    let count=0;
    while(a.filter(e=>Array.isArray(e)).length > 0){
        count += a.length;
        a= a.filter(e=>Array.isArray(e));
        a = a.flat();
    };
    return a.length+count;
}

// Solution 1
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}