// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// The solution
function toCamelCase(str){
    return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
  }

// The solition 2
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }

// The solution 3
function toCamelCase(str){
    var regExp=/[-_]\w/ig;
    return str.replace(regExp,function(match){
          return match.charAt(1).toUpperCase();
     });
}


// The solution 4
function toCamelCase(str){
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
  }


// The solution 5
function toCamelCase(str){
    return str.split('').map((el,index,arr)=>{
      if(el !==  '-' && el !== '_'  && arr[index-1] !== '-' && arr[index-1] !== '_'){
        return el
      }else if(arr[index-1] == '-' || arr[index-1] == '_'){
        return el.toUpperCase()
      }else{
        null
      }
      }).join('')
  }