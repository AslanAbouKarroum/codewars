

// The solution
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    return Math.sqrt(sq) % 1 ? -1 : Math.pow((Math.sqrt(sq) + 1),2) ;
  }

// The solution 2
function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    return Math.sqrt(sq) % 1 === 0 ? Math.pow((Math.sqrt(sq) + 1),2) : -1;
  }