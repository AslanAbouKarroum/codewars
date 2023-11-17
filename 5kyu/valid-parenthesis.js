// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// The solution
function validParentheses(parens){
    var re = /\(\)/;
    while (re.test(parens)) parens = parens.replace(re, "");
    return !parens;
}

// The solution 2
function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
}

// The solution 3
function validParentheses(parens) {
    let length = parens.length,std = 0;
    while(length!==std){
        length=parens.length;
        parens =parens.replace(/\(\)/g,"");
        std = parens.length;
    };
    return std ?false :true;
}