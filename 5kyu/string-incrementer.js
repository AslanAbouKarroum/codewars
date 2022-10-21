// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.



// The solution 
function incrementString (strng) {
    console.log(Number(strng.slice(-1)))
    if(strng.slice(-1).match(/\d/)){
        if(Number(strng.slice(-1)) != 9){
            return strng.slice(0,-1) + (Number(strng.slice(-1)) + 1);
        }else{
            let i = 1;
            while((strng.slice(-i)[0] == 9)){
                console.log(strng.slice(-i)[0])
                i++
            }
            console.log(i)
            console.log(strng.slice(-i))
            console.log(strng.slice(-(i))[0])
            if((Number(strng.slice(-(i))[0]) != 0)){
                return strng.slice(0,-i+1) + (Number(strng.slice(-i+1)) + 1);
            }else{
                return strng.slice(0,-(i)) + (Number(strng.slice(-(i))) + 1);
            }
        };
    }else{
       return strng + 1;
    };
};

// The solution 2
let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)