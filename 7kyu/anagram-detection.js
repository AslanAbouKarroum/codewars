// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// The solution
var isAnagram = function(test, original) {
    if(test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('')){
      return true
    }else{
      return false
    }
  };
