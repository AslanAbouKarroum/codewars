// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

// My Solution
function rot13(str) {
    return str.split('').map((e)=>/[A-Za-z]/.test(e)? ((e.charCodeAt(0)>=65 && e.charCodeAt(0)<78) ||(e.charCodeAt(0)>=97 && e.charCodeAt(0)<110)? String.fromCharCode(e.charCodeAt(0)+13) : String.fromCharCode(e.charCodeAt(0)-13) ) :e).join('')
};