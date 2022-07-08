

// The solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);


// The solution 2
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
  }

// The solution 3
function findOdd(A) {
    let obj = new Set(A) 
    size = obj.size
    let arr = Array.from(obj)
    for(i=0;i<size;i++){
      if(A.filter(el=>el==arr[i]).length % 2 !== 0){
          return arr[i]
      }
    }
  }