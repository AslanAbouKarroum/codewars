// Longest Palindrome
// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// My solution
function longestPalindrome(s){
    let res = 0;
    s.split(' ').forEach((e,i,ar)=>{
        let t = e.split('');
        for(let i =0;i<e.length;i++){
            let a = t.length
            for(let j=0;j<a;j++){
                t.join('')==t.reverse().join('')&& t.length>res ? res = t.length: (t.reverse(), t.pop());
            };
            t =e.slice(i+1).split('');
        };
    });
    return res;
};