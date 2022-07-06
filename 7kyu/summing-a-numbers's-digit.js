

// The solution
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce((acc,num)=>acc + Number(num),0)
  }

  // The solution 2
  function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
  }

  // The solution 3
  function sumDigits(number) {
    var i = 0;
    var sum = 0;
    number = Math.abs(number)
    while(number != 0)
    {
        sum += number % 10
        number = Math.floor(number/10)
    }
    return sum
}