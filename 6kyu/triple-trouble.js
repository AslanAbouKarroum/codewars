// tripledouble(num1,num2)
// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

// If this isn't the case, return 0

// Examples
// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1

// The solution
function tripledouble(num1, num2) {
    let result =0;
    let arr1 = [],arr2 = [];
    String(num1).split('').forEach((el,ind,array)=>el==array[ind+1] && el ==array[ind+2] ? arr1.push(el):null);
    String(num2).split('').forEach((el,ind,array)=>el==array[ind+1] ? arr2.push(el):null);
    for(let i =0 ;i<arr1.length;i++){
        if(arr2.includes(arr1[i])) return result =1;
    }
    return result;
}

// The solution 2
function tripledouble(num1, num2) {
    for (let i = 0; i < 10; i++) {
      if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
        return 1;
      }
    }
    return 0;
  }

  // The solution 3
  function tripledouble(num1, num2){
    for(var i = 0; i < 10; i++){
      triple = new RegExp (i + "{3}")
      double = new RegExp (i + "{2}")
      if(triple.test(num1) && double.test(num2)){
         return 1
      }
    }
    return 0
  }