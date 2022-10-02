// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// The solution
var n = function(digit) {
    return function(op) {
      return op ? op(digit) : digit;
    }
  };
  var zero = n(0);
  var one = n(1);
  var two = n(2);
  var three = n(3);
  var four = n(4);
  var five = n(5);
  var six = n(6);
  var seven = n(7);
  var eight = n(8);
  var nine = n(9);
  
  function plus(r) { return function(l) { return l + r; }; }
  function minus(r) { return function(l) { return l - r; }; }
  function times(r) { return function(l) { return l * r; }; }
  function dividedBy(r) { return function(l) { return l / r; }; }

// The solution 2
'zero one two three four five six seven eight nine'.split(' ').forEach(
    (mth, num) => this[mth] = (f = val => val) => f(num) 
  )
  
  let plus      = (r) => (l) => l + r
  let minus     = (r) => (l) => l - r
  let times     = (r) => (l) => l * r
  let dividedBy = (r) => (l) => l / r 

// The solution 3
let x = 0,result;

function zero() {
    console.log('this is 0')
    x += 0;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}
function one() {
    console.log('this is 1')
    x += 1;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}
function two() {
    console.log('this is 2')
    x += 2;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}
function three() {
    console.log('this is 3')
    x += 3;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}
function four() {
    console.log('this is 4')
    x += 4;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}
function five() {
    console.log('this is 5')
    x += 5;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}
function six() {
    console.log('this is 6')
    x += 6;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}
function seven() {
    console.log('this is 7')
    x += 7;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}
function eight() {
    console.log('this is 8')
    x += 8;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}
function nine() {
    console.log('this is 9')
    x += 9;
    if(x.length > 1){
        x = x.split('').reverse().join('')
        result = Math.floor(eval(x))
        x=0;
        return result;
    }else{
        return x
    }
}

function plus() {
    console.log('this is plus')
    return  x += '+';
}
function minus() {
    console.log('this is minus')
    return  x += '-';
}
function times() {
    console.log('this is multiplication')
    return  x += '*';
}
function dividedBy() {
    console.log('this is division')
    return  x += '/';
}