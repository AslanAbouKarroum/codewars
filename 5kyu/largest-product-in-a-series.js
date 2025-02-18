// Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

// For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.

// The input string always has more than five digits.

// Adapted from Project Euler.

// My Solution
function greatestProduct(input) {
    let first_round = [];
    let hold = 0;
    for(let i =0;i<input.length-4;i++){
        hold = input.slice(i,i+5);
        if(input[i+5]<input[i]|| i+5==input.length){
            first_round.push(hold);
        };
    };
    return Math.max(...first_round.map(e=> String(e).split('').reduce((acc,el)=>acc*el)))
};

// Solution

function greatestProduct(input) {
    return input.split('').reduce(function(max, d, i, a) {
      if (i > input.length - 5)
        return max;
      var prod = a.slice(i,i+5).reduce(function(prd, d) {return prd*parseInt(d,10)},1);
      return Math.max(max, prod);
    }, 0);
  }