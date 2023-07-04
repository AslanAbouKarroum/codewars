// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

// Solution

function dashatize(num) {
    if(Number(num) !== num) return "NaN";
    let arr =(''+num).split('');
    arr = arr.map((e,i)=>{
        if(Number(e)%2 ==0){
            console.log(1)
            return e;
        }else if(i==0 && Number(e)%2==1){
            console.log(2)
            return e+"-";
        }else if(i==(arr.length-1) && Number(e)%2==1){
            console.log(3)
            return "-"+e;
        }else if(Number(e)%2==1){
            console.log(4)
            return "-"+e+"-";
        }
    });
    console.log(arr);
    console.log(arr.join(''));
    arr =arr.join('').split('-').filter(e=>e);
    return arr.join('-');
};

// Solution 2
function dashatize(num) {
    return num = num.toString().split("").map(function(c){
      return c % 2 ? "-" + c + "-" :  c ;
    }).join("").split("-").filter(a => a != "").join("-");
    
};