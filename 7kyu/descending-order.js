// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// The solution
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }

// The solution 2
function descendingOrder(n){
    //...
    let arr = n.toString().split('')
    let arr1 = []
    let j = arr.length
    for(let i = 0; i < j; i++){
        let max = Math.max(...arr)
        arr1.push(max.toString())
        arr.splice(arr.indexOf(max.toString()), 1)
    }
    return Number(arr1.join(''))
}