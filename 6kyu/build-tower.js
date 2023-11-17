// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// The solution
function towerBuilder(n) {
    return [...Array(n)].map((_,i)=>" ".repeat(n-1-i)+"*".repeat(i*2+1)+" ".repeat(n-1-i))
  }


// The solution 2
function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
      const spaces = ' '.repeat(n - k - 1);
      return spaces + '*'.repeat(k + k + 1) + spaces;
    });
  }

// The solution 3
function towerBuilder(nFloors){
    let arr = []
    let str = ''
    for(let i =1;i<=nFloors;i++){
        str = ''
        for(let j=0; j<nFloors-i ;j++){
            str+=' '
        }
        for(let j=0; j<((i*2)-1) ;j++){
            str+='*'
        }
        for(let j =0; j<nFloors-i ;j++){
            str+=' '
        }
        arr.push(str)
    }
    return arr
}