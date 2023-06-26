// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

// Sloution 1

function calc(expr) {
    let arr= expr.split(' ');
    if(arr.length ==1 && arr[0]=='') return 0;
    if(arr.length ==1) return Number(arr[0])
    console.log(arr)
    let n=0;
    let m=0;
    expr.split(' ').forEach((e,i,a)=>{
        if((e!=="+"&&e!=="-"&&e!=="*"&&e!=="/") && (a[i-1]!=="+"&&a[i-1]!=="-"&&a[i-1]!=="*"&&a[i-1]!=="/")&& i!=0 && (a[i+1]!=="+"&&a[i+1]!=="-"&&a[i+1]!=="*"&&a[i=1]!=="/") && i !=a[a.length-1]){
            console.log('we are working with first if and th num is '+e)
            n=i;
            console.log(arr)
        }
        else if((e=="+"||e=="-"||e=="*"||e=="/") && (a[i-1]=="+"||a[i-1]=="-"||a[i-1]=="*"||a[i-1]=="/")){
            console.log('we are working with second if and th num is '+e)
            arr.splice(i,1);
            arr.splice(n,0,e);
            m=i;
            console.log(arr);
        }
        else if(e=="+"||e=="-"||e=="*"||e=="/"){
            console.log('we are working with third if and th num is '+e)
            arr.splice(i,1);
            arr.splice(i-1,0,e);
            console.log(arr)
         };
    });
    if(n!=0&&m!=0){
    console.log(arr);
    console.log("n= " +n)
    arr.splice(n+1,0,"(")
    console.log(arr)
    console.log("m= " +m)
    arr.splice(m,0,")")
    console.log(arr)
    }
    return eval(arr.join(''));
};

// Solution 2
ction calc(expr) {  
    var result = [];
    var atoms = expr.split(/\s+/);
    var operators = ['+', '-', '*', '/'];
    for (var i=0; i<atoms.length; i++) {
      switch(atoms[i]) {
        case '+': result.push(result.pop() + result.pop());console.log(result); break;
        case '-': result.push(-result.pop() + result.pop());console.log(result);  break;
        case '*': result.push(result.pop() * result.pop());console.log(result);  break;
        case '/': result.push(1 /(result.pop() / result.pop()));console.log(result);  break;
        default: result.push(parseFloat(atoms[i]));console.log(result); 
      }
    }
    return result.pop() || 0;
  }