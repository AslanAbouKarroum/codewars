// You are given a node that is the beginning of a linked list. This list contains a dangling piece and a loop. Your objective is to determine the length of the loop.

// For example in the following picture the size of the dangling piece is 3 and the loop size is 12:


// // Use the `getNext' method or 'next' property to get the following node.
// node.getNext()
// node.next

// Solution
function loop_size(node) {
    let nodes = new Map();
    while (!nodes.has(node)) {
      nodes.set(node, nodes.size);
      node = node.getNext();
    };
    return nodes.size - nodes.get(node);
};