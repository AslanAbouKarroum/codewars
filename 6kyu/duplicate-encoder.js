

// The solution
function duplicateEncode(word){
    return word
      .toLowerCase()
      .split('')
      .map( function (a, i, w) {
        return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
      })
      .join('');
  }


// The solution 2
function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }

// The solution
function duplicateEncode(word){
    let arr= []
    let ar = word.toLowerCase().split('')
    ar.forEach((el,index,arra)=> arra.filter(el1=>el1 === el).length > 1 ? arr.push(')' ): arr.push('(' ))
    return arr.join('')
}
