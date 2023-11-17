

// THe solution
function openOrSenior(data){
    // ...
      return data.map(el=>el[0] >= 55 && el[1] > 7 ? 'Senior' : 'Open')
  }

  // The solution 2
  function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }
  