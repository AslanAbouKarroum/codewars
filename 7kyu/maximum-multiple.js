// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .


// The solution
function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }

// The solution 2
function maxMultiple(divisor, bound){
    //your code here
    let divisors = []
    for(let i = bound;i>0;i--){
      if(i % divisor==0)divisors.push(i)
    }
    return divisors.find(el=>el <= bound)
  }