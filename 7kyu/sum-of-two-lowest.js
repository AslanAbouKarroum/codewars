

// The solution
function sumTwoSmallestNumbers(numbers) {  
    var [ a, b ] = numbers.sort((a, b) => a - b)
    return a + b
  }

// The solution 2
function sumTwoSmallestNumbers(numbers) {  
    //Code here
    return numbers.sort((a,b)=>a-b)[0] + numbers.sort((a,b)=>a-b)[1]
  }