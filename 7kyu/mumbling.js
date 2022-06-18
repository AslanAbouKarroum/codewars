// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// The solution
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

// The solution 2
function accum(s) {
	// your code
  let arr = []
  s.split('').forEach( (letter,index) => {
    let Letter = letter.toUpperCase()
    for(let i = 0; i < index; i++){
      Letter += letter.toLowerCase()
    }
    arr.push(Letter)
  })
  return arr.join('-')
}
