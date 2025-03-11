// You are given a string containing 0's, 1's and one or more '?', where ? is a wildcard that can be 0 or 1.

// Return an array containing all the possibilities you can reach substituing the ? for a value.

// Examples
// '101?' -> ['1010', '1011']

// '1?1?' -> ['1010', '1110', '1011', '1111']
// Notes:

// Don't worry about sorting the output.
// Your string will never be empty.
// Have fun!

// My Solution
function possibilities(str) {
    let n = str.split('').filter(e=>e=='?').length;
    let num_of_possibilities = Math.pow(2,n);
    let arr = [];
    for(let i=0;i<num_of_possibilities;i++){
        let binary_str = i.toString(2)
        while(binary_str.length<n){
            binary_str ='0'+binary_str
        }
        arr.push(binary_str)
    }
    let ans = [];
    let c = 0;
    while(ans.length<num_of_possibilities){
        let j= 0;
        let modified_str = str.split('').map((e,i,ar)=>{
            if(e=='?'){
                return arr[c][j++]
            }else{
                return e
            }
        }).join('')
        ans.push(modified_str)
        c++
    }
   return ans
};

// Solution
const possibilities = (s) => s.includes("?")? [...possibilities(s.replace("?", "0")), ...possibilities(s.replace("?", "1"))]: [s];
