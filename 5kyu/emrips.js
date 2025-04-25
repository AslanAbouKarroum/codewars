// If you reverse the word "emirp" you will have the word "prime". That idea is related with the purpose of this kata: we should select all the primes that when reversed are a different prime (so palindromic primes should be discarded).

// For example: 13, 17 are prime numbers and the reversed respectively are 31, 71 which are also primes, so 13 and 17 are "emirps". But primes 757, 787, 797 are palindromic primes, meaning that the reversed number is the same as the original, so they are not considered as "emirps" and should be discarded.

// The emirps sequence is registered in OEIS as A006567

// Your task
// Create a function that receives one argument n, as an upper limit, and the return the following array:

// [number_of_emirps_below_n, largest_emirp_below_n, sum_of_emirps_below_n]

// Examples
// find_emirp(10)
// [0, 0, 0] ''' no emirps below 10 '''

// find_emirp(50)
// [4, 37, 98] ''' there are 4 emirps below 50: 13, 17, 31, 37; largest = 37; sum = 98 '''

// find_emirp(100)
// [8, 97, 418] ''' there are 8 emirps below 100: 13, 17, 31, 37, 71, 73, 79, 97; largest = 97; sum = 418 '''
// Happy coding!!

// Advise: Do not use a primality test. It will make your code very slow. Create a set of primes using a prime generator or a range of primes producer. Remember that search in a set is faster that in a sorted list or array

// Solution
function findEmirp(n){
    let emirps = primeGenerator(n).filter(isEmirp);
    return emirps.length ? [emirps.length, Math.max.apply(null, emirps), emirps.reduce((acc, cur) => acc+cur, 0)] : [0, 0, 0];
  }
  
  function primeGenerator(n) {
    let arr = [];
    for (let i=10; i<=n; i++) {
      if (isPrime(i)) arr.push(i);
    }
    return arr;
  }
  
  function isPrime(num) {
    if (num % 2 === 0 ) return false;
    let max = Math.sqrt(num);
    for (let i=3; i<=max; i+=2) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function isEmirp(num) {
    let numReversed = +(num+'').split('').reverse().join('');
    if (isPrime(numReversed) && num !== numReversed) return true;
    return false;
  }