// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// The solution 
function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

// The solution 2
function pigIt(str){
    return str.replace(/(\w)(\w+)(\b|\s)/g,"$2$1ay").replace(/(\b|\s)(\w)(\b|\s)/g,"$1$2ay")
}

// The solution 3
function pigIt(str) {
    return str.replace(/\w+/g, (w) => {
      return w.slice(1) + w[0] + 'ay';
    });
  }