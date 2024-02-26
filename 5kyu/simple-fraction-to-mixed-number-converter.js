// Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

// [sign]a b/c

// where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

// If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

// Division by zero should raise an error (preferably, the standard zero division error of your language).

// Value ranges
// -10 000 000 < x < 10 000 000
// -10 000 000 < y < 10 000 000
// Examples
// Input: 42/9, expected result: 4 2/3.
// Input: 6/3, expedted result: 2.
// Input: 4/6, expected result: 2/3.
// Input: 0/18891, expected result: 0.
// Input: -10/7, expected result: -1 3/7.
// Inputs 0/0 or 3/0 must raise a zero division error.

// My Solution
function findDivisors(num){
    let arr= [];
    for(let i=1;i<=num;i++){
        if(num%i==0) arr.push(i);
    };
    return arr.slice(1);
};
function mixedFraction(s){
    let arr= s.split('/');
    let sign = '';
    if(arr[0][0]=='-'&&arr[1][0]=='-'){
        arr = arr.map(e=>e.replace(/-/g,''))
    }else if(arr[0][0]=='-'||arr[1][0]=='-'){
        sign = '-';
        arr = arr.map(e=>e.replace('-',''))
    }
    if(arr[1]==0) throw 'error';
  if(Number(arr[0])==0) return '0';
    let s1 = arr.join(',')
    do{
        s1 = arr.join(',')
        let div_arr = arr.map(findDivisors);
        let comman_divisor = 1;
        div_arr[0].map((e,i)=>{if(div_arr[1].find(el=>el==e))comman_divisor = e})
        arr = arr.map(e=>e/comman_divisor)
    }while(arr.join(',')!=s1)
     if(Number.isInteger(arr[0]/arr[1]))  return sign +String(arr[0]/arr[1]);
    let integer = 1;
    let m = arr[0]%arr[1]
    integer=(arr[0]-m)/arr[1]
    arr[0] = m
    if(integer==0){
        return sign + String(`${arr[0]}/${arr[1]}`)
    }else{
        return sign + String(`${integer} ${arr[0]}/${arr[1]}`)
    }
};