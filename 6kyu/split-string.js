// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// The solution
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
 }

// The solution 2
function solution(str){
    return str.length %2 ?  (str+'_').match(/\w{2}/g) :  str.match(/\w{2}/g) || []
 }