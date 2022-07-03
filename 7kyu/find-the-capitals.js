// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// The solution
var capitals = function (word) {
	// Write your code here
  let arr = []
    word.split('').forEach((letter,index)=>{
    if(letter === letter.toUpperCase()){ arr.push(index)}
  })
  return arr
};