// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// your referral bonus, and

// the price of a beer can

// For example:

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16

//My Solution

var beeramid = function(bonus, price) {
    let num_of_beers = Math.floor(bonus/price)
    res = 0;
    let i=1;
    if(num_of_beers<1){
        return 0;
    }else if(num_of_beers<5){
        return 1
    }
    while(res<=num_of_beers){
        res = res + Math.pow(i,2)
        i++
    }
    return i-2 // res-Math.pow(i-1,2)
}

// Solution
var beeramid = function(bonus, price) {
    var beers = Math.floor(bonus / price), levels = 0;
    while(beers >= ++levels * levels) {
      beers -= levels * levels;
    }
    return levels - 1;
  }