

// The solution
var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }
// The solution 2
function find_average(array) {
    // your code here
    if(array.length == 0){
      return 0
    }else{
      let sum = 0
      array.forEach(num => sum +=num)
      return sum/array.length;
    }
  }