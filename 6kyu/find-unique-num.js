// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.


// The solution
function findUniq(arr) {
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]
  }

// The solution 2
function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }

// The solution 3
function findUniq(arr) {
    return arr[0]==arr[1] && arr[0]==arr[2] ? arr.find(el=>el!== arr[0]) : (arr[1] == arr[2] ? arr[0] : arr.find(el=>el!== arr[0]))  
  }