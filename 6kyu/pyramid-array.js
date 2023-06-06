// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

// Solution
function pyramid(n) {
    let res = [];
    for(let i = 1;i<=n;i++){
        let num_of_1s = [];
        for(let j = 1;j<=i;j++){
            num_of_1s.push(1);
        };
        res.push(num_of_1s);
    };
    return res;
};

// Solution 2
function pyramid(n) {
    const res = [];
    for(let i = 0; i < n; i++){
      res.push([...Array(i+1)].fill(1))
    }
    return res;
  }

  // Solution 3
  function pyramid(n) {
    return Array(n).fill().map((e,i)=>Array(i+1).fill(1))
  }