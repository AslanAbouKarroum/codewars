

// The solution
function twoOldestAges(ages){
    return ages.sort(function(a,b){return a-b;}).slice(-2);
  }

// The solution 2
function twoOldestAges(ages){
    var x = ages.sort(function(i,j) { return j-i;});
    return [x[1],x[0]];
  }

// The solution 3
function twoOldestAges(ages){
    let arr = []
    let max = Math.max(...ages)
    arr.push(max)
    ages.splice(ages.indexOf(max),1)
    max = Math.max(...ages)
    arr.unshift(max)
    return arr
  }
