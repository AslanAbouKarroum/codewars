// Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} } 
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
// where all numbers are positive ints. You have to produce a result in the form:

// (N_1, D) ... (N_n, D) 
// or
// [ [N_1, D] ... [N_n, D] ] 
// or
// [ (N_1', D) , ... (N_n, D) ] 
// or
// {{N_1, D} ... {N_n, D}} 
// or
// "(N_1, D) ... (N_n, D)"
// depending on the language (See Example tests) in which D is as small as possible and

// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:
// Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

// Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

// My Solution
function convertFrac(lst){
    if(lst.length==0) return '';
    lst =lst.map(e=>simplified_fraction(e));
    denominators_arr = lst.map(e=>e[1]);
    let denominator = nearest_comman_multiplier(denominators_arr);
    let res= lst.map((e,i,ar)=>{e[0]=e[0]*(denominator/e[1]);e[1]=denominator;return [e[0],e[1]]});
    let str = '';
    for(let i=0;i<res.length;i++){
        str = str+'('+res[i][0]+","+res[i][1]+')'
    };
    return str;
};

// Most simplified fraction 

function simplified_fraction(fraction){
    let f0 = fraction[0]
    let f1 = fraction[1]
    let arr0 = findDivisors(f0)
    let arr1 = findDivisors(f1)
    let commonDivisorArray= arr0.filter(e=>arr1.includes(e))
    do{
        f0 = f0/commonDivisorArray[commonDivisorArray.length-1] || f0
        f1 = f1/commonDivisorArray[commonDivisorArray.length-1] || f1
        arr0 = findDivisors(f0)
        arr1 = findDivisors(f1)
        commonDivisorArray= arr0.filter(e=>arr1.includes(e))
    }while(commonDivisorArray.length)
    return [f0,f1]
};
//console.log(simplified_fraction([1,2]))

function findDivisors(num){
    let arr= [];
    for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
        if(num%i==0){ 
            arr.push(i);
            arr.push(num/i)
        };
    }
    return arr;
};

// Nearest comman multiplier
function nearest_comman_multiplier(arr){
    let multiplier = arr.reduce((a,b)=>a*b);
    let arr_of_divisors = findDivisors(multiplier);
    console.log('multiplier '+multiplier)
    let k=-1;
    arr_of_divisors.sort((a,b)=>a-b)
    console.log(arr_of_divisors)
    let res = arr_of_divisors.find((e,i,ar)=>{if(arr.filter((el,ind,a)=>{if(e%el==0)return true}).length==arr.length){ console.log(e);return e}})
    console.log('res '+res)
    return res || multiplier;
};

// Solution
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function convertFrac(arr) {
  const cd = arr.reduce((a, [_, d]) => lcm(d, a), 1);
  return arr.map(([n, d]) => `(${n * cd/d},${cd})`).join('');
}