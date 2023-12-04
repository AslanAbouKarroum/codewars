// Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes
// 13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

// Task
// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

// Examples (in general form):
// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

// See "Sample Tests" for your language.

// My Solution
function backwardsPrime(start, stop){
    console.log(start+' '+stop)
    let res = [];
    if(start%2==0) start=start+1;
    for(let i = start; i <= stop; i += 2) { // start from 3, stop at the square, increment in twos
        //console.log('i '+i)
        for(let j=3;j<=Math.sqrt(i);j+=2){
            //console.log('j '+j)
            if(i % j === 0) break; // modulo shows a divisor was found
            if(j==Math.floor(Math.sqrt(i))|| j==Math.floor(Math.sqrt(i))-1) res.push(i);
        };
    };
    console.log(res)
    let f_res= [];
    res.forEach(o_num=>{
        let num = Number(String(o_num).split('').reverse().join(''));
        if(num%2==0){ return null
        }else if(num==o_num){
            return null
        }else{
        const s = Math.sqrt(num); // store the square to loop faster
        for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
            if(num % i === 0) break; // modulo shows a divisor was found
            // console.log('i '+i)
            if(i==Math.floor(s)||i==Math.floor(s)-1 ) f_res.push(o_num);
        }}
        
    })
    return f_res;
}