// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

// "100 180 90 56 65 74 68 86 99"
// When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

// 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.
// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers

// The solution
function orderWeight(strng) {
    const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
     function comp(a,b){
       let sumA = sum(a);
       let sumB = sum(b);
       return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
      };
    return strng.split(' ').sort(comp).join(' ');
}

// The solution 2
function orderWeight(strng) {
    return strng
      .split(" ")
      .map(function(v) {  
        return {
          val: v,
          key: v.split("").reduce(function(prev, curr) {
            return parseInt(prev) + parseInt(curr);
          }, 0)
        };
      })
      .sort(function(a, b) {
        return a.key == b.key 
          ? a.val.localeCompare(b.val)
          : (a.key - b.key);
      })
      .map(function(v) {
        return v.val;
      })
      .join(" ");
}

// The solution 3
function orderWeight(strng){
    let result = [];
    let strArr =  strng.split(/\s+/);
    console.log(strArr);
    let wegt = strArr.map((el,ind,arr)=>el=el.split('').reduce((acc,num)=>acc+Number(num),0));
    console.log(wegt);
    while(result.length<strArr.length){
            if(wegt.indexOf(Math.min(...wegt))!== wegt.lastIndexOf(Math.min(...wegt))){
                let indArr = [];
                wegt.forEach((el,ind,arr)=>el==Math.min(...wegt) ? indArr.push(ind) : null);
                console.log(indArr);
                let compair = [];
                for(let i =0;i<indArr.length;i++){
                    compair.push(strArr[indArr[i]])
                    wegt[wegt.indexOf(Math.min(...wegt))] = Infinity;
                };
                console.log(compair);
                compair.sort();
                console.log(compair);
                result  = result.concat(compair);
                console.log(wegt);
                console.log(result);
            }else{
                result.push(strArr[wegt.indexOf(Math.min(...wegt))]);
                wegt[wegt.indexOf(Math.min(...wegt))] = Infinity;
                console.log(wegt);
                console.log(result);
            }
    }
    
    return result.join(' ');
}