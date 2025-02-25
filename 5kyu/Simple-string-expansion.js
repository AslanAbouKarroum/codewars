// Consider the following expansion:

// solve("3(ab)") = "ababab"     -- because "ab" repeats 3 times
// solve("2(a3(b))") = "abbbabbb" -- because "a3(b)" == "abbb", which repeats twice.
// Given a string, return the expansion of that string.

// Input will consist of only lowercase letters and numbers (1 to 9) in valid parenthesis. There will be no letters or numbers after the last closing parenthesis.

// More examples in test cases.

// My Solution
function solve(str){
    let regex = /\d\(\w*\)/;
    while(str.includes('(')){
      if(!str.match(regex)){
          let omit_para_regex = /\(\w*\)/;
          let matched_str = str.match(omit_para_regex)[0];
          let replacement_str = matched_str.slice(1,matched_str.length-1)
          str = str.replace(omit_para_regex,replacement_str);
      }else{
          let matched_str = str.match(regex)[0];
          matched_str = matched_str[0]+matched_str.slice(2,matched_str.length-1);
          let replacement_str = replace_fun(matched_str[0],matched_str.slice(1));
          str = str.replace(regex,replacement_str);
      };
    };
    return str;
  };
  
  function replace_fun(num,char){
      let str= '';
      for(let i=0;i<num;i++){
          str+= char
      };
      return str;
  };

// Solution
function solve(str){
    return str.replace(/\d?\((\w*)\)/,(m,a)=>a.repeat(+m[0]||1));
}