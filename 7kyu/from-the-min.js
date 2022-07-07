// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)

// The solution
function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }

// The solution 2
function minValue(t){
    //your code here
    let nums = [...new Set(t)].sort((a,b)=>a-b)
    let min = ''
    for(let i =0;i<nums.length;i++){
      min += nums[i]
    }
    return Number(min)
  }

  // The solution 2
  