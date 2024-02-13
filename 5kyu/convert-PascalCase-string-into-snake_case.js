// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

// Solution
function toUnderscore(string) {
    console.log(string);
    if(Number(string)===string) return ''+string;
    try{return  string.split('').map((e,i,ar)=>{
            if(i==0){
                return e.toLowerCase();
            }else if(/[A-Z]/.test(e)){
                return '_'+e.toLowerCase();
            }else{
                return ''+e;
            }
            }).join('');
    }catch(error){
        return string.toLowerCase();
    };
};

// Solution
function toUnderscore(string) {
  return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
};