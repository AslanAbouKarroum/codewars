// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// My Solution
function is_prime(num){
    if(num%2==0) return false;
    for(let i=3;i<=Math.sqrt(num);i+=2){
        if(num%i==0) return false;
    };
    return true;
};



function primeFactors(n){
    let arr = [];
    while(n!=1){
        let primeNum = 2;
        while(n>=primeNum){
            if(n%primeNum==0){
                n = n/primeNum;
                arr.push(primeNum);
            }else{
                primeNum++
                while(!is_prime(primeNum)){
                    primeNum++
                };
            };
        };
    };
    let obj = new Set(arr);
    let str = '';
    for(let i=0;i<obj.size;i++){
        let p = arr.filter((e,ind,ar)=>e==ar[0]);
        arr.splice(0,p.length);
        if(p.length>1){
            str = str+ '(' +  p[0] + '**' +p.length +')';
        }else{
            str = str+ '(' +  p[0]+')';
        };
    };
    return str;
};