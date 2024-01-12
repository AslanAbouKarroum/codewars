// Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a power b. Note that a and b may be very large!

// For example, the last decimal digit of 9 power 7 is 9 since 9 power 7 = 4782969
// The last decimal digit of (2^200)^(2^300) which has over 10^92 decimal digits is 6.
// Also please take 0^0 to be one

// you may assume that the imput will always be valid
// examples:
// lastDigit(4n, 1n)            // returns 4n
// lastDigit(4n, 2n)            // returns 6n
// lastDigit(9n, 7n)            // returns 9n  
// lastDigit(10n,10000000000n)  // returns 0n

// Solution 
const lastDigit = (n, m) => {
    let base = n % 10n;
    let rem = m % 4n;
    let exp = (rem === 0n && m !== 0n) ? 4n : rem;
    return base ** exp % 10n;
  };

// Solution 
//const lastDigit = (a, b) => {
//     if (b === '0') return 1;
//     const cycles = [
//       [0],
//       [1],
//       [2, 4, 8, 6],
//       [3, 9, 7, 1],
//       [4, 6],
//       [5],
//       [6],
//       [7, 9, 3, 1],
//       [8, 4, 2, 6],
//       [9, 1]
//     ];
//     const ad = a.slice(-1);
//     const bn = b.slice(-2);
//     const c = cycles[ad];
//     return c[(+bn + 99) % c.length];
//   };