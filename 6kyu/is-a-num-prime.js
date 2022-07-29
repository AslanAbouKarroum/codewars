// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// The solution
function isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

// The solution 2
function isPrime(num) {
    let even = 2;
    while ((even * even <= num) && (num % even != 0))
    {
      even++;
    }
    return even * even > num && num > 1
  }

// The solution 3
function isPrime(num) {
    if(num<2)return false
    if(num<227){
      for(let i =2;i<=num/2;i++){
          if(num%i == 0) return false
      }
      return true
    }
    let i = Math.floor(num/(53))
    let arr=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223]
    for(let k =0;k<arr.length;k++){
        if(num%arr[k]==0)return false
    }
    let j =227
    while(i>227){
      i = Math.floor(num/(j))
      if(i==1) break
      if(num%i==0)return false
      j+=2
    }
    return true
  }