// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

// The solution
function solution(roman){
    var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
 }


// The solution 2
function solution (roman) {
    let numArr = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let rman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    let numArr1 = [4,9,40,90,400,900]
    let rman1 = ['IV','IX','XL','XC','CD','CM']
    let num = 0
    while(roman){
        if(rman1.includes(roman[0]+roman[1])){
            num += numArr1[rman1.indexOf(roman[0]+roman[1])]
            roman = roman.split('').splice(2).join('')
        }else{
            num += numArr[rman.indexOf(roman[0])]
            roman = roman.split('').splice(1).join('')
        }
    }
    return num
  }