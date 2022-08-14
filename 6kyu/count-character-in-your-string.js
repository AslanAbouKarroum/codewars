// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// The solution 
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}

// The solution 2
function count (string) {
    var result = {};
    
    for(let i = 0; i < string.length; i++) {
      if(result.hasOwnProperty(string[i])){
        result[string[i]] += 1;
      } else {
        result[string[i]] = 1;
      }
    }
    
    return result;
  }

// The solution 3
function count (string) {  
    let arr = string.split('').sort()
    let countArr = []
    arr.reduce((acc,el,ind,array)=>{
    acc = 0
        for(let i =0;i<arr.length;i++){
            if(el==array[i])acc++
        }
        countArr.push(acc)
    },0)
    let obj = {}
    arr.forEach((el,ind)=>obj[el]=countArr[ind])
    return obj
  }