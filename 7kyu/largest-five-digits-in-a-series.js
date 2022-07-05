

// The solution
function solution(digits){
    let answer = 0;
    
    for (let i=0; i<digits.length; i++){
      let number = digits.substr(i, 5);  //each loop iteration pulls the next 5 digits into a substring
      if(Number(number) > answer){       //convert to number and compare against answer
        answer = Number(number);
      }
    }
    return answer;
  }

// The solution 2
function solution(digits){
    if(!digits){
        return 98765
    }
    for(let i =0;i < Math.max(...digits.toString().split(''));i++){
    let arr1 =  digits.toString().split('')
    let max = Math.max(...arr1) - i
    let arr =  arr1.filter(el => el == max)
    for(let i=0;i<arr.length;i++){
        let index =  arr1.findIndex(el=> el ==max) 
       this["arra"+i] =  arr1.slice(index,index + 5)
       arr1.splice(arr1.findIndex(el=> el ==max),1)
    }
    let finalArray = []
    for(let i=0;i<arr.length;i++){
        finalArray.push(Number(this["arra"+i].join('')) )
    }
    this['max'+i] = Math.max(...finalArray)
    }
    let finallyarray = []
    for(let i=0;i<10;i++){
        finallyarray.push(Number(this['max'+i] ))
    }
    let final = finallyarray.filter(el=> el == Number(el))
    return Math.max(...final)
  }