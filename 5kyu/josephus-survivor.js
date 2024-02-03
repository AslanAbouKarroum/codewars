// In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

// Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

// n=7, k=3 => means 7 people in a circle
// one every 3 is eliminated until one remains
// [1,2,3,4,5,6,7] - initial sequence
// [1,2,4,5,6,7] => 3 is counted out
// [1,2,4,5,7] => 6 is counted out
// [1,4,5,7] => 2 is counted out
// [1,4,5] => 7 is counted out
// [1,4] => 5 is counted out
// [4] => 1 counted out, 4 is the last element - the survivor!
// The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

// Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.

// My Solution
function josephusSurvivor(n,k){
    var result = [], index = 0;
    let items = [];
    items.length = n
    items.fill(0)
    items = items.map((e,i)=>e=i+1)
    while (items.length > 0){
      index = (index + k - 1) % items.length;
      result = result.concat(items.splice(index, 1));
    }
    return result.pop();
};

// Solution
function josephusSurvivor(n, k){
    return n < 1 ? 1 : (josephusSurvivor(n - 1, k) + --k) % n + 1;
  }