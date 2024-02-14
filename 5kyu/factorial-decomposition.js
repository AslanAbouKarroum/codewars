// The aim of the kata is to decompose n! (factorial n) into its prime factors.

// Examples:

// n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
// since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

// n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

// n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
// Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

// Notes

// the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
// factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// My Solution
function decomp(n){
    let obj = {};
    let arr = primeNumbers(n);
    while(n>1){
        let i =0;
        while(n/arr[i]>=2){
            let res= n/arr[i];
            let counter = 0;
            while(Number.isInteger(res)){
                counter++;
                res = res/arr[i];
            };
            if(counter){ if(obj[arr[i]]){obj[arr[i]] =counter +obj[arr[i]]}else{obj[arr[i]]= counter}};
            i++;
        };
        if(is_prime(n)){if(obj[n]){obj[n] =1 +obj[n]}else{obj[n]= 1}};
        n--
    };
    let str= '';
    for(const [key, value] of Object.entries(obj)){
        str = str+key+'^'+value+' ';
    };
    return str.slice(0,-1).split(' ').map(e=>{if(/\^1\b/.test(e)){return e.slice(0,e.indexOf('^'))}else{return e}}).join(' * ');
};

function is_prime(num){
    if(num==2) return true;
    if(num%2==0) return false;
    for(let i=3;i<=Math.sqrt(num);i+=2){
        if(num%i==0) return false;
    };
    return true;
};

function primeNumbers(n){
    let i =3;
    let arr =[2];
    while(i<=n){
        if(is_prime(i)) arr.push(i)
        i= i+2;
    };
    return arr;
};