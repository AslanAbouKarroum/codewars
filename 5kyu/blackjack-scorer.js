// Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

// The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).

// Scoring rules:
// Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

// Return the highest score of the cards that is less than or equal to 21. If there is no score less than or equal to 21 return the smallest score more than 21.

// Examples
// ["A"]                           ==>  11
// ["A", "J"]                      ==>  21
// ["A", "10", "A"]                ==>  12
// ["5", "3", "7"]                 ==>  15
// ["5", "4", "3", "2", "A", "K"]  ==>  25

// My Solution
function scoreHand(cards) {
    if(!cards.includes('A')) return cards.map(e=>e.match(/[KQJ]/) ? 10:Number(e)).reduce((acc,num)=>acc+num);
    let i=0;
    let sum=0;
    cards = cards.map(e=>e.match(/[KQJ]/) ? 10:e).sort();
    console.log(cards);
    while(i<cards.length){
        if(cards[i]!='A'){
            sum = sum + Number(cards[i]);
        }else{
            if(sum<11&&i==cards.length-1){
                sum = sum +11;
            }else{
                sum = sum +1;
            };
        };
        i++;
    };
    return sum;
};

// Solution
const cardsMap = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10, A: 1}

const scoreHand = cards => {
  const sum = cards.reduce((acc, card) => acc + cardsMap[card], 0)
  return sum < 12 && cards.includes('A') ? sum + 10 : sum
}