// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// The solution
function solution(number){
  var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }
  var ans = '';
  while(number>0){
      for(a in roman){ 
          if(roman[a]<=number){ ans += a; number-=roman[a]; break;}
              
      }
  }
  return ans;
  }

  // The solution 2
  function solution(number){
    return [
      { threshold: 1000, char: 'M'},
      { threshold: 900,  char: 'CM'},
      { threshold: 500,  char: 'D'},
      { threshold: 400,  char: 'CD'},
      { threshold: 100,  char: 'C'},
      { threshold: 90,   char: 'XC'},
      { threshold: 50,   char: 'L'},
      { threshold: 40,   char: 'XL'},
      { threshold: 10,   char: 'X'},
      { threshold: 9,    char: 'IX'},
      { threshold: 5,    char: 'V'},
      { threshold: 4,    char: 'IV'},
      { threshold: 1,    char: 'I'}
    ].reduce(function(prev, curr, idx, arr)
    {
      while(number >= curr.threshold)
      {
        prev += curr.char;
        number -= curr.threshold;
      }
      
      return prev;
    }, '');
  }

  // The solution 3
  function solution(number){
    let romanArr = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    let numberArr = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let roman = '';
    let restNumber = 0;
    while(number){
        if(number>=1000){
            let multi = Math.floor(number/1000)
            roman += 'M'.repeat(multi)
            number -= 1000*multi
        }else{
            for(let i=0;i<numberArr.length;i++){
                if(number<numberArr[i]){
                    number -= numberArr[i-1];
                    restNumber = numberArr[i-1];
                    break;
                }
            }
            roman += romanArr[numberArr.indexOf(restNumber)];
        }
    }
    return roman
  }