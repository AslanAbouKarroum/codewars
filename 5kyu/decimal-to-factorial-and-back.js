// Coding decimal numbers with factorials is a way of writing out numbers in a base system that depends on factorials, rather than powers of numbers.

// In this system, the last digit is always 0 and is in base 0!. The digit before that is either 0 or 1 and is in base 1!. The digit before that is either 0, 1, or 2 and is in base 2!, etc. More generally, the nth-to-last digit is always 0, 1, 2, ..., n and is in base n!.

// Read more about it at: http://en.wikipedia.org/wiki/Factorial_number_system

// Example
// The decimal number 463 is encoded as "341010", because:

// 463 = 3×5! + 4×4! + 1×3! + 0×2! + 1×1! + 0×0!

// If we are limited to digits 0..9, the biggest number we can encode is 10!-1 (= 3628799). So we extend 0..9 with letters A..Z. With these 36 digits we can now encode numbers up to 36!-1 (= 3.72 × 1041)

// Task
// We will need two functions. The first one will receive a decimal number and return a string with the factorial representation.

// The second one will receive a string with a factorial representation and produce the decimal representation.

// Given numbers will always be positive.

// My Solution
function factorial(n) {
    if (n < 0) return -1; // Handle negative input
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    };
    return result;
};

function dec2FactString(nb) {
    let i=0;
    let arr= [0];
    while(nb>arr.map((e,i,ar)=>e*(ar.length-1-i)).reduce((acc,e)=>acc+e)){
        i++;
        arr.unshift(factorial(i));
    };
    return arr.map((e,i,ar)=>{
        let j=1;
        while(j<=ar.length-1-i){
            if(j*e>nb)break;
            j++;
        };
        nb = nb-(e*(j-1))
        if((j-1)>9) return String.fromCharCode(j-1+55)
        return j-1;
    }).join('');
};

function factString2Dec(str) {
    return str.split('').reverse().map(e=>{if(!Number(e)&&Number(e)!==0){ return e.charCodeAt(0)-55}else{return e}}).map((e,i)=>e*factorial(i)).reduce((acc,e)=>acc+e);
};

// SOlution
function dec2FactString(n){
	const d = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	let s = '0', i = 2;
	while (n){s = d[n%i] + s; n = Math.floor(n / i); i++}
	return s;
}
function factString2Dec(s){
	const d = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const l = s.length;
	return s.split('').reduce((a,e,i) => Number(a) * (l - i) + d.indexOf(e), 0);
}