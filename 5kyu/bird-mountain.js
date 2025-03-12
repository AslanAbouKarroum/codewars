// A bird flying high above a mountain range is able to estimate the height of the highest peak.

// Can you?

// Example
// The birds-eye view
// ^^^^^^
//  ^^^^^^^^
//   ^^^^^^^
//   ^^^^^
//   ^^^^^^^^^^^
//   ^^^^^^
//   ^^^^
// The bird-brain calculations
// 111111
//  1^^^^111
//   1^^^^11
//   1^^^1
//   1^^^^111111
//   1^^^11
//   1111

// 111111
//  12222111
//   12^^211
//   12^21
//   12^^2111111
//   122211
//   1111

// 111111
//  12222111
//   1233211
//   12321
//   12332111111
//   122211
//   1111

// Height = 3

// Solution
var peakHeight = function(mountain, counter = 0) {
    if(mountain.every(row => row.every(sq => sq === " "))) return counter;
  
    let afterEdgeCheck = mountain.map((row,i) => row.map((sq, j) => {
      let up = mountain[i-1] ? mountain[i-1][j] : " ";
      let down = mountain[i+1] ? mountain[i+1][j] : " ";
      let left = mountain[i][j-1] || " ";
      let right = mountain[i][j+1] || " ";
      return [up,down,left,right].includes(" ") ? " " : sq;
    }));
  
    return peakHeight(afterEdgeCheck, ++counter);
}