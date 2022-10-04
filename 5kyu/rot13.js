// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// The solution 
function rot13(message) {
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
  }

// The solution 2
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13))); 

// The solution 3
function rot13(message){
    return message.split('').map((el)=>{
        if(el.charCodeAt(0)>77 && el.charCodeAt(0)<91){
            return String.fromCharCode(65 + 13 -(91 - el.charCodeAt(0)));
        }else if(el.charCodeAt(0)>109 && el.charCodeAt(0)<123){
            return String.fromCharCode(97 + 13 -(123 - el.charCodeAt(0)));
        }else if((el.charCodeAt(0)>64 && el.charCodeAt(0)<78) ||(el.charCodeAt(0)>96 && el.charCodeAt(0)<110) ){
            return String.fromCharCode(el.charCodeAt(0) +13)
        }else{
            return el
        }
    }).join('')
}