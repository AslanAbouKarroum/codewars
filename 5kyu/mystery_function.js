// Tired of those repetitive javascript challenges? Here's a unique hackish one that should keep you busy for a while ;)

// There's a mystery function which is already available for you to use. It's a simple function called mystery. It accepts a string as a parameter and outputs a string. The exercise depends on guessing what this function actually does.

// You can call the mystery function like this:

// let myOutput = mystery('myInput');
// Using your own test cases, try to call the mystery function with different input strings and try to analyze its output in order to guess what is does. You are free to call the mystery function in your own test cases however you want.

// When you think you've understood how my mystery function works, prove it by reimplementing its logic in a function that you should call 'solved(x)'. To validate your code, your function 'solved' should return the same output as my function 'mystery' given the same inputs.

// Beware! Passing your own test cases doesn't imply you'll pass mine.

// Cheaters are welcome :)

// Have fun!

// My Solution
function solved(str){
    if(str.length%2==0){
        return str.split('').sort().join('') 
    }else{
        let str1 = str.split('').slice(0,Math.floor(str.length/2)).join('');
        let str2 = str.split('').slice(Math.ceil(str.length/2)).join('');
        str = str1 + str2;
        return str.split('').sort().join('');
    }
}

// Solution
function solved(str) {
    return str.split('').filter(function(x, i, arr) {
      return arr.length - 1 !== i * 2
    }).sort().join('')
}