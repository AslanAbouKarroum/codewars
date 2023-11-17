// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

// My Solution

function decipherThis(str) {
    return str.split(' ').map((e,i,ar)=>{
        if(e.match(/[a-zA-Z]+/g)){
            if(e.match(/[a-zA-Z]+/g)[0].length==1){
                return String.fromCharCode(e.match(/\d+/g))
                + e.match(/[a-zA-Z]+/g)
            }else{
                return String.fromCharCode(e.match(/\d+/g))
                 + e.match(/[a-zA-Z]+/g)[0][e.match(/[a-zA-Z]+/g)[0].length-1]
                 + e.match(/[a-zA-Z]+/g)[0].slice(1,e.match(/[a-zA-Z]+/g)[0].length-1)
                 + e.match(/[a-zA-Z]+/g)[0][0]
            }
        }else{
            return String.fromCharCode(e)
        }
    }).join(' ')
};

// Solution 1

function decipherThis(str) {
    return str.split(" ")
      .map(w =>
        w.replace(/^\d+/, c => String.fromCharCode(c))
         .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
      )
      .join(" ")
  }