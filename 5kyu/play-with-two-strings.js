// Your task is to Combine two Strings. But consider the rule...

// By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks, only two input strings and as result one output string;-)...

// And here's the rule:
// Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b. Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
// I think that's all;-)...

// Some easy examples:

// Input: "abc" and "cde"      => Output: "abCCde" 
// Input: "ab" and "aba"       => Output: "aBABA"
// Input: "abab" and "bababa"  => Output: "ABABbababa"
// Once again for the last example - description from KenKamau, see discourse;-):

// a) swap the case of characters in string b for every occurrence of that character in string a
// char 'a' occurs twice in string a, so we swap all 'a' in string b twice. This means we start with "bababa" then "bAbAbA" => "bababa"
// char 'b' occurs twice in string a and so string b moves as follows: start with "bababa" then "BaBaBa" => "bababa"

// b) then, swap the case of characters in string a for every occurrence in string b
// char 'a' occurs 3 times in string b. So string a swaps cases as follows: start with "abab" then => "AbAb" => "abab" => "AbAb"
// char 'b' occurs 3 times in string b. So string a swaps as follow: start with "AbAb" then => "ABAB" => "AbAb" => "ABAB".

// c) merge new strings a and b
// return "ABABbababa"

// There are some static tests at the beginning and many random tests if you submit your solution.

// My Solution
function workOnString(a,b){
    let arr_b= b.toLowerCase().split('').sort().map((e,i,ar)=>{if(i==ar.length-1){return e}else if(e!==ar[i+1]){return e+'-'}else{return e}}).join('').split('-').map(e=>{if(e.length%2==0){return e.slice(0,2)}else{return e[0]}}).join('').split('');
    a=a.split('').map(e=>{if(arr_b.filter(el=>el==e.toLowerCase()).length%2==0){return e}else{if(e.toLowerCase()===e){return e.toUpperCase()}else{return e.toLowerCase()}}}).join('');
    return a;
};
function workOnStrings(a,b){
    a= workOnString(a,b);
    b= workOnString(b,a)
    return a+b;
};

// Solution
// Case insensitive letter occurrences count
const count = str => str
				.toLowerCase()
				.split('')
				.reduce((R, x) => (R[x] = (R[x]||0) + 1, R), {});

// Invert character case
const changeCase = char => char > 'Z' ? char.toUpperCase() : char.toLowerCase();

// Rule-based string processing
const strConv = (str, rules) => str
				.split('')
				.map(x => rules[x.toLowerCase()] % 2 ? changeCase(x) : x)
				.join('');

const workOnStrings = (a, b) => strConv(a, count(b)) + strConv(b, count(a));