// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// The solution 
const reverseSeq = n => {
    let arr_of_num = []
    for(let i = 1; i <= n; i++){
      arr_of_num.push(i)
    }
    return arr_of_num.reverse();
  };

  // The solution 2
  const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  };