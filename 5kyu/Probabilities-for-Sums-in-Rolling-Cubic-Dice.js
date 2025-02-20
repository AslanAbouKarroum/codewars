// When we throw 2 classical dice (values on each side from 1 to 6) we have 36 (6 * 6) different results.

// We want to know the probability of having the sum of the results equals to 11. For that result we have only the combination of 6 and 5. So we will have two events: {5, 6} and {6, 5}

// So the probability for that result will be:

// P(11, 2) = 2/(6*6) = 1/18    (The two is because we have 2 dice)
// Now, we want to calculate the probability of having the sum equals to 8. The combinations for that result will be the following: {4,4}, {3,5}, {5,3}, {2,6}, {6,2} with a total of five combinations.

// P(8, 2) = 5/36 
// Things may be more complicated if we have more dices and sum values higher.

// We want to know the probability of having the sum equals to 8 but having 3 dice.

// Now the combinations and corresponding events are:

// {2,3,3}, {3,2,3}, {3,3,2}
// {2,2,4}, {2,4,2}, {4,2,2}
// {1,3,4}, {1,4,3}, {3,1,4}, {4,1,3}, {3,4,1}, {4,3,1}
// {1,2,5}, {1,5,2}, {2,1,5}, {5,1,2}, {2,5,1}, {5,2,1}
// {1,1,6}, {1,6,1}, {6,1,1}

// A total amount of 21 different combinations

// So the probability is:
// P(8, 3) = 21/(6*6*6) = 0.09722222222222222
// Summarizing the cases we have seen with a function that receives the two arguments

// rolldice_sum_prob(11, 2) == 0.0555555555 # or 1/18

// rolldice_sum_prob(8, 2) ==  0.13888888889# or 5/36

// rolldice_sum_prob(8, 3) == 0.0972222222222  # or 7/72
// And think why we have this result:

// rolldice_sum_prob(22, 3) == 0
// Create the function rolldice_sum_prob/rolldiceSumProb for this calculation.

// Have a nice time!

// (You do not have to round the results)

// My Solution
function rolldiceSumProb(sum, dice){
    if(sum>6*dice || sum<dice|| dice ==0) return 0;
    if(sum==6*dice) return 1/Math.pow(6,dice);
    if(dice==1&&sum>0&&sum<7) return 1/6; 
    //arr = Array(Math.pow(6,dice)).fill([]);

    const results = [];
    
    function generate(currentCombination, remainingDices) {
      if (remainingDices === 0) {
        results.push([...currentCombination]);
        return;
      }
    
      for (let i = 1; i <= 6; i++) {
        currentCombination.push(i);
        generate(currentCombination, remainingDices - 1);
        currentCombination.pop(); // Backtrack: Remove the last added dice value
      }
    }
    
    generate([], dice);
    return results.filter(e=>e.reduce((acc,num)=>acc+num)==sum).length/results.length;

};

// Solution
function rolldiceSumProb(arr, totalSides){
    if (arr<totalSides || arr>totalSides*6) return 0;
    if (totalSides===0) return 1;
    let p = 0;
    for (let i=1; i<=6; i++) p += rolldiceSumProb(arr-i, totalSides-1);
    return p/6;
}