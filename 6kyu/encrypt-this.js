// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"


// The solution
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');

// The solution 2
var encryptThis = function(text) {
    return text.split(' ').map((word,ind,arr)=>word.split('').map((letter,index,array)=>{
        if(index ==0){return letter.charCodeAt(0)
        }else if(index == 1){return array[array.length-1]
        }else if(index==array.length-1){return array[1]
        }else{
            return letter
        } 
    } ).join('')).join(' ')
  }
  
// The solution 3
const encryptThis = text =>
  text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (word, a, mid, b) => 
    word.charCodeAt(0) + b + mid + a);
