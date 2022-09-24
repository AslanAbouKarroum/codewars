// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// The solution
function encode(string) {
    return string.replace(/a/g,'1').replace(/e/g,'2').replace(/i/g,'3').replace(/o/g,'4').replace(/u/g,'5')
}

function decode(string) {
  return string.replace(/1/g,'a').replace(/2/g,'e').replace(/3/g,'i').replace(/4/g,'o').replace(/5/g,'u')
}

// The solution 2
function encode(string){
    return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
  }
  
  function decode(string){
    return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
  }

// The solution 3
function encode(string){
    var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
    return codeStringGivenMapping(string, vowelMapping);
  }
  
  function decode(string){
    var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
    return codeStringGivenMapping(string, vowelMapping); 
  }
  
  function codeStringGivenMapping(string, mapping){
    return string.split('').map(function(char){
      return mapping[char] || char;
    }).join(''); 
  }
  