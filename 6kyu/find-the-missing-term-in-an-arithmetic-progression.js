// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

// Example
// findMissing([1, 3, 5, 9, 11]) == 7
// PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

// The solution
var findMissing = function (list) {
    let diff = 0, progressive = 0, array = list.map((num,ind,arr)=>arr[ind+1]-num).slice(0,-1).sort((a,b)=>b-a);
    let chosing_array = [Math.abs(array[0]),Math.abs(array[list.length-2])].sort((a,b)=>a-b);
    if(array[0]==Math.abs(array[0])){
      diff = chosing_array[1]
      progressive = chosing_array[0]
    }else{
      diff = -chosing_array[1]
      progressive = -chosing_array[0]
    }
    let index = list.map((num,ind,arr)=>arr[ind+1]-num).slice(0,-1).indexOf(diff)
    return list[index] + progressive
  }

  // The solution 2
  var findMissing = function (list) {
    var step = (list[list.length - 1] - list[0]) / (list.length);
    return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
  }