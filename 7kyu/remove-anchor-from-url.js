// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// The solution
function removeUrlAnchor(url){
    return url.split('#')[0];
  }

// The solution 2
function removeUrlAnchor(url){
    // TODO: complete
    if(url.split('').find(el=> el == '#') !== '#') return url
    return url.split('').splice(0,url.split('').findIndex((el)=>el === '#')).join('')
  }