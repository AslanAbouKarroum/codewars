// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

// The solution
function isValidIP(str) {
  console.log(str)
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
}

// The solution 2
function isValidIP(str) {
    console.log(str)
    if(str.split('.').length !== 4|| str!== str.trim() || str.split('.').map(el=>el.trim()).join('.') !== str) return false
    return str.split('.').filter((el)=> ( el ===0|| Number(String(el).split('').map(ele=>Number(ele)).join(''))) &&el>=0 && el <=255 && ( el === 0 ||String(el)[0] !== 0)).join('.') === str.trim()
  }