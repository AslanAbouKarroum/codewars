// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// The solution
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// The solution 2
function longest(s1, s2) {
    // your code
    let s = s1 + s2
    let arr = []
    s.split('').sort().forEach((el,index)=>{
      if(el !== s.split('').sort()[index+1]){
         arr.push(el)
      }
      })
    return arr.join('')
  }
