

// The solution
function tribonacci(signature,n){  
    for (var i = 0; i < n-3; i++) { // iterate n times
      signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
  }

// The solution 2
function tribonacci(signature,n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
      result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
    }
    return result;
  }


// The solution 3
function tribonacci(signature,n){
    if(n<3){
        return signature.splice(0,n)
    }
    let signa = signature.slice(0,3)
    signature.splice(0,1)
    let sum = signa.reduce((acc,num)=>acc + num,0)
    signature.push(sum)
    signa.push(sum)
    for(let i =0;i<n-4;i++){
      sum += signature[i] + signature[i+1]
      signa.push(sum)
      signature.push(sum)
    }
    return signa
  }