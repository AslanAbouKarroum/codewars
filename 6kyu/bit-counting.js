// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// The solution
countBits = n => n.toString(2).split('0').join('').length;

// The solution 2
var countBits = function(n) {
    return n.toString(2).replace(/0/g,'').length;
  };

// The solution 3
function countBits(n) {
    for(c=0;n;n>>=1)c+=n&1
    return c;
  }

// The solution 4
const countBits = n => n.toString(2)
                        .split('')
                        .filter(ele => ele == 1)
                        .length

// The solution 5
var countBits = function(n)
{
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
};