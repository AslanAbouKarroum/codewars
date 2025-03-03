// You are given an array of integers. Implement a function which creates a complete binary tree from the array (complete meaning that every level of the tree, except possibly the last, is completely filled).

// The elements of the array are to be taken left-to-right, and put into the tree top-to-bottom, left-to-right.

// For example, given the array [17, 0, -4, 3, 15] you should create the following tree:

//     17
//    /  \
//   0   -4
//  / \
// 3   15 
// A tree node type is preloaded for you:

// var TreeNode = function(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };

// Solution

function arrayToTree(values, i = 0) {
    if (i >= values.length) return;
    return new TreeNode(values[i], arrayToTree(values, 2 * i + 1),
                                   arrayToTree(values, 2 * i + 2));
}