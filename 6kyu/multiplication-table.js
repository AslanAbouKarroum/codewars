// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// The solution
let multiplicationTable = function(size) {
    let arr = [];
    for(let i =1;i<=size;i++){
        arr.push(Array(size).fill(1).map((num,ind)=>(num+ind)*i));
    }
    return arr
}

// The solution 2
multiplicationTable = function(n) {
    return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+1)*(j+1)))
  }