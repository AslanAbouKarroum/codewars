
// The solution
function isValidIP(str) {
    console.log(str)
    if(str.split('.').length !== 4|| str!== str.trim() || str.split('.').map(el=>el.trim()).join('.') !== str) return false
    console.log(str)
    console.log(str.split('.').filter((el)=> ( el ===0|| Number(String(el).split('').map(ele=>Number(ele)).join(''))) &&el>=0 && el <=255 && ( el === 0 ||String(el)[0] !== 0)).join('.'))
    console.log(str.trim())
    return str.split('.').filter((el)=> ( el ===0|| Number(String(el).split('').map(ele=>Number(ele)).join(''))) &&el>=0 && el <=255 && ( el === 0 ||String(el)[0] !== 0)).join('.') === str.trim()
  }