// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]

// My Solution
function longestRepetition(s) {
    if(!s.length) return ["",0];
    let stored_arr = [];
    let new_arr = [];
    s.split('').forEach((e,i,ar)=>{
        if(e==ar[i-1]|| i==0){
            new_arr.push(e)
        }else{
            stored_arr.push(new_arr)
            new_arr = []
            new_arr.push(e)
        }
    })
    stored_arr.push(new_arr)
    let final_arr = [];
    stored_arr.forEach((e,i,ar)=>{ if(e.length>final_arr.length) final_arr = e})
    return [final_arr[0],final_arr.length]
}

// Solution 1
function longestRepetition(s) {
    let count = 0;
    let prevLetter = '';
    
    return s.toLowerCase().split('').reduce((acc, curr) => {
      if(curr === prevLetter){
        count++;
      }
      else{
        count = 1;
      }
  
      if(count > acc[1]){
        acc[1] = count;
        acc[0] = curr;
      }
  
      prevLetter = curr;
      return acc;
    }, ['', 0]);
  }
