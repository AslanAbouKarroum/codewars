// Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

// For example:

// var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'
// If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
// The shift will always be in range of [1, 26].

// MY Solution
var CaesarCipher = function (shift) {
    this.shift = shift;
    this.encode = (str)=>{
        return str.toUpperCase().split('').map(e=>{if(e.charCodeAt(0)>=65&&e.charCodeAt(0)<=90){
            if(e.charCodeAt(0)+this.shift<=90){
                return String.fromCharCode(e.charCodeAt(0)+this.shift)
            }else{
                return String.fromCharCode(e.charCodeAt(0)+this.shift-26)
            }
        }else{return e}}).join('');
    };
    this.decode=(str)=>{
        return str.split('').map(e=>{if(e.charCodeAt(0)>=65&&e.charCodeAt(0)<=90){
            if(e.charCodeAt(0)-this.shift>=65){
                return String.fromCharCode(e.charCodeAt(0)-this.shift)
            }else{
                return String.fromCharCode(e.charCodeAt(0)-this.shift+26)
            }
        }else{return e}}).join('');
    };
};