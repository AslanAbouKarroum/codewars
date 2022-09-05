// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

// The solution
function parse( data ){
    let arr = [];
    data.match(/[idso]/g).reduce((acc,el)=>{
        if(el=='i') acc++
        if(el=='d') acc--
        if(el=='s') acc = acc**2
        if(el=='o') arr.push(acc)
        return acc
    },0)
  return arr
}