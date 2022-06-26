// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// The solution
function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }

// The solution 2
function stray(numbers) {
    //   return 0;
      let avg = numbers.reduce((sum,el)=>sum + el,0)/numbers.length
      let arr = numbers.map(el=>Math.abs(el-avg))
      return numbers[arr.indexOf(Math.max(...arr) )]
    }