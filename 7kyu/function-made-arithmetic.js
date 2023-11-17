

// The solution
const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
  }[operator]);

// The solutin 2
function arithmetic(a, b, operator){
    optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
    return eval(a + optable[operator] + b); 
  }


// The solution 3
function arithmetic(a, b, operator){
    //your code here!
    var mathFun = {
      'add': function (a, b) {
          return a+b;
      },
      'subtract': function (a, b) {
          return a-b;
      },
      'multiply': function (a, b) {
          return a*b;
      }, 
      'divide': function (a, b) {
          return a/b;
      }
    }
  
    return mathFun[operator](a,b);
  }

// The soluion 4
function arithmetic(a, b, operator){
    //your code here
    if(operator == 'add'){
       return a + b
    }else if(operator == 'subtract'){
       return a - b
    }else if(operator == 'multiply'){
       return a * b
    }else if(operator == 'divide'){
       return a / b
    }
  }