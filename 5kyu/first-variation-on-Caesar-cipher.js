// The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' to 'Z') with a different one a fixed number of places up or down the alphabet.

// This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).

// If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...

// Coding: Parameters and return of function "movingShift"
// param s: a string to be coded

// param shift: an integer giving the initial shift

// The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).

// If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.

// For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.

// You will also implement a "demovingShift" function with two parameters

// Decoding: parameters and return of function "demovingShift"
// an array of strings: s (possibly resulting from "movingShift", with 5 strings)

// an int shift

// "demovingShift" returns a string.

// Example:
// u = "I should have known that you would have a perfect answer for me!!!"

// movingShift(u, 1) returns :

// v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

// (quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)

// and demovingShift(v, 1) returns u. 

// My Solution
function movingShift(s, shift) {
    let str= s.split('').map((e,i,ar)=>{
        if(!/[A-Za-z]/.test(e)){
            return e;
        }else{
            if((e.charCodeAt(0)<91&&e.charCodeAt(0)+((shift+i)%26)>90) ||(e.charCodeAt(0)>96&&e.charCodeAt(0)+((shift+i)%26)>122) ){
                return String.fromCharCode(e.charCodeAt(0)+((shift+i)%26)-26);
            }else{
                return String.fromCharCode(e.charCodeAt(0)+((shift+i)%26));
            }  ;
        };
    }).join('');
    let l = str.length;
    if(l%5==0){
        let arr=[];
        for(let i=0,j=0;j<5;i=i+(l/5),j++){
            arr.push(str.slice(i,(l/5)+i));
        };
        return arr;
    }else{
        let sub_length = Math.floor(l/4);
        let fifth_length = l-(sub_length*4);
        while(fifth_length+4<sub_length){
            fifth_length+=4;
            sub_length-=1;
        };
        let arr=[];
        for(let i=0,j=0;j<4;i=i+sub_length,j++){
            arr.push(str.slice(i,sub_length+i));
        };
        arr.push(str.slice(sub_length*4));
        return arr;
    };
};

function demovingShift(arr, shift) {
    return arr.join('').split('').map((e,i)=>{
        if(!/[A-Za-z]/.test(e)){
            return e;
        }else{
            if(e.charCodeAt(0)<91 &&e.charCodeAt(0)-((shift+i)%26)<65||(e.charCodeAt(0)>96&&e.charCodeAt(0)-((shift+i)%26)<97)){
                return String.fromCharCode(e.charCodeAt(0)-((shift+i)%26)+26);
            }else{
                return String.fromCharCode(e.charCodeAt(0)-((shift+i)%26));
            };
        };
    }).join('');
};