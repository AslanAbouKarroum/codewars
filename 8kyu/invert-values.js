// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// The solution
function invert(array) {
    return array.map( x => x === 0 ? x : -x);
 }

//The solution 2
function invert(array) {
    let additive_inverse = []
    array.forEach(n => additive_inverse.push(-n) )
    return additive_inverse;
  }