// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

// Solution
Math.round = function(number) {
      if(String(number).split('.')[1]==undefined||String(number).split('.')[1][0]<5){
          return Number(String(number).split('.')[0]);
      }else{
          return Number(String(number).split('.')[0])+1;
      };
  };
  
  Math.ceil = function(number) {
      if(String(number).split('.')[1]>0){
          return Number(String(number).split('.')[0])+1;
      }else{
          return Number(String(number).split('.')[0]);
      };
  };
  
  Math.floor = function(number) {
      return Number(String(number).split('.')[0]);
  };

