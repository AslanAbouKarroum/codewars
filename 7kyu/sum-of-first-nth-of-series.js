

// The solution
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
  }

  // The solution
  function SeriesSum(n){
    if(n === 0) return '0.00'
    if(n === 1) return '1.00'
    let sum = 0
    let acc = 1
    for(let i = 0; i < n; i++){
      acc += 3
      sum += 1/acc
    }
    sum++
    return sum.toFixed(2)
  }