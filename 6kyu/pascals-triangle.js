// You can read Wikipedia article on Pascal's Triangle for more information.

// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
// Note
// Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.

// My Solution
function pascalsTriangle(n) {
    let stored_arr = [];
    let new_arr = [];
    for(let i=1;i<=n;i++){
        let old_arr = [...new_arr];
        new_arr = [];
        for(let j=1;j<=i;j++){
            if(j==1 || j==i){
                new_arr.push(j);
            }else{
                new_arr.push(old_arr[j-2]+old_arr[j-1]);
            };
        };
        stored_arr.push(...new_arr);
    }
    return stored_arr;
};

// Solution 1
function pascalsTriangle(n) {
    var pascal = [];
    var idx = 0;
    
    for ( var i = 0; i < n; i++ ) {
      idx = pascal.length - i;
      for ( var j = 0; j < i+1; j++ ) {
        if ( j === 0 || j === i ) {
          pascal.push(1);
        } else {
          pascal.push( pascal[ idx+j ] + pascal[ idx+j-1 ] );
        }
      }
    }
    
    return pascal;
  }
