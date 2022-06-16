// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// The solution
const check = (a,x) => a.includes(x)

// The solution 2
function check1(a, x) {
    // your code here
    if(x == 0 && a.find(item => item === x) == 0){
      return true
    }
      return a.find(item => item === x) ? true : false
    }
    