// Task
// Write a function deNico/de_nico() that accepts two parameters:

// key/$key - string consists of unique letters and digits
// message/$message - string with encoded message
// and decodes the message using the key.

// First create a numeric key basing on the provided key by assigning each letter position in which it is located after setting the letters from key in an alphabetical order.

// For example, for the key crazy we will get 23154 because of acryz (sorted letters from the key).
// Let's decode cseerntiofarmit on   using our crazy key.

// 1 2 3 4 5
// ---------
// c s e e r
// n t i o f
// a r m i t
//   o n   
// After using the key:

// 2 3 1 5 4
// ---------
// s e c r e
// t i n f o
// r m a t i
// o n
// Notes
// The message is never shorter than the key.
// Don't forget to remove trailing whitespace after decoding the message
// Examples
// deNico("crazy", "cseerntiofarmit on  ") => "secretinformation"
// deNico("abc", "abcd") => "abcd"
// deNico("ba", "2143658709") => "1234567890"
// deNico("key", "eky") => "key" 
// Check the test cases for more examples.

// My Solution
const deNico = (key, m) => { 
    let code = key.split('');
    let arr = key.split('').sort();
    code = code.map((e)=>arr.findIndex(el=>el==e));
    const regex = new RegExp(`.{1,${code.length}}`, 'g');
    let message = m.match(regex);
    let result = [];
    message.map(e=>{
        let res = [];
        for(let i=0;i<code.length;i++){
            res.push(e[code[i]])
        }
        result.push(res.join(''));
    });
    return result.join('').replace(/\s+$/, '');
};

// Solution
const deNico1 = (key, m) => {
    let codder = key.split('').sort().map(e => key.indexOf(e));
    return m.split('').map((_, i) => m[Math.floor(i/key.length)*key.length + codder.indexOf(i % key.length)]).join('').replace(/\s+$/,'');
}