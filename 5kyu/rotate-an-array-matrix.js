// Write a function that rotates a two-dimensional array (a matrix) either clockwise or anti-clockwise by 90 degrees, and returns the rotated array.

// The function accepts two parameters: a matrix, and a string specifying the direction or rotation. The direction will be either "clockwise" or "counter-clockwise".

// Examples
// For matrix:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// Clockwise rotation:

// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
// Counter-clockwise rotation:

// [
//   [3, 6, 9],
//   [2, 5, 8],
//   [1, 4, 7]
// ]

// My Solution

function rotate(matrix, direction) {
    let arr = [];
    switch (direction){
        case "clockwise" :
            for(let i=0;i<matrix[0].length;i++){
                let sub_arr = [];
                for(let j=matrix.length-1;j>=0;j--){
                    sub_arr.push(matrix[j][i]);
                };
                arr.push(sub_arr);
            };
            break;
        case "counter-clockwise":
            for(let i =matrix[0].length-1;i>=0;i--){
                let sub_arr = [];
                for(let j=0;j<matrix.length;j++){
                    sub_arr.push(matrix[j][i]);
                };
                arr.push(sub_arr);
            };
            break;
    };
    return arr;
}