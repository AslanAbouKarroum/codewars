// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The start number will always be smaller than the end number. Both numbers can be also negative!

// The solution
function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
  }

// The solution 2
function dontGiveMeFive(start, end){
    //return 0;
    let arr = []
    for(let i = start;i<=end;i++){
      if( (i%5 !== 0 || ( i%5 == 0 && i%2 == 0)) && (i < 50 || i > 59) )arr.push(i)
    }
    return arr.length
  }