// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// The solution
function order(words){
  
    return words.split(' ').sort(function(a, b){
        return a.match(/\d/) - b.match(/\d/);
     }).join(' ');
  }

// The solution 2
var reg = /\d/;

function order(words){
  return words.split(' ').sort(comparator).join(' ');
}

function comparator(word, nextWord) {
  return +word.match(reg) - +nextWord.match(reg)
}

// The solution 3
function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }

// The solution 4
function order(words){
    // ...
    return words && words.split(' ')
      .map(word => word.match(/\d/) + word)
      .sort()
      .map(word => word.slice(1))
      .join(' ');
  }

// The solution 5
function order(words){

    let arr = []
    for(let i =0;i<words.split(' ').length;i++){
        arr.push('k')
    }
    for(let i =0;i<words.split(' ').length;i++){
    arr.splice(words.split(' ')[i].split('').find(el1=>el1==1 || el1 == 2 || el1 ==3 || el1 == 4 || el1==5 || el1 == 6 || el1 ==7 || el1 == 8 || el1 == 9) -1,1,words.split(' ')[i] )
    }
    return arr.join(' ')
}