// In some countries of former Soviet Union there was a belief about lucky tickets. A transport ticket of any sort was believed to posess luck if sum of digits on the left half of its number was equal to the sum of digits on the right half. Here are examples of such numbers:

// 003111    #             3 = 1 + 1 + 1
// 813372    #     8 + 1 + 3 = 3 + 7 + 2
// 17935     #         1 + 7 = 3 + 5  // if the length is odd, you should ignore the middle number when adding the halves.
// 56328116  # 5 + 6 + 3 + 2 = 8 + 1 + 1 + 6
// Such tickets were either eaten after being used or collected for bragging rights.

// Your task is to write a funtion luck_check(str), which returns true/True if argument is string decimal representation of a lucky ticket number, or false/False for all other numbers. It should throw errors for empty strings or strings which don't represent a decimal number.

// My Solution
function luckCheck(ticket){
    if(ticket==''||ticket.match(/\d/g).length!==ticket.length) throw Error;
    let arr = ticket.split('').map(e=>Number(e))
    let arr_left = arr.slice(0,Math.floor(arr.length/2))
    let arr_right = arr.slice(Math.ceil(arr.length/2))
    return arr_left.reduce((a,b)=>a+b)==arr_right.reduce((a,b)=>a+b) ? true : false
}

// Solution
function luckCheck(ticket) {
    if (!ticket || !/^\d+$/.test(ticket)) {
      throw new Error('Invalid ticket number');
    }
    
    let leftSum = 0;
    let rightSum = 0;
    
    for (let i = 0, len = ticket.length; i < len; i++) {
      if (i < Math.floor(len / 2)) {
        leftSum += +ticket[i]
      } else if (i >= Math.ceil(len / 2)) {
        rightSum += +ticket[i];
      }
    }
    
    return rightSum === leftSum;
  }