// In this finite version of Conway's Game of Life (here is an excerpt of the rules) ...

// The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

// Any live cell with fewer than two live neighbours dies, as if caused by under-population.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overcrowding.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
// The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one)
// ...implement your own method which will take the initial state as an NxM array of 0's (dead cell) and 1's (living cell) and return an equally sized array representing the next generation. Cells outside the array must be considered dead. Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).
// N.B.: for illustration purposes, 0 and 1 will be represented as ░ and ▓ blocks (PHP: basic black and white squares) respectively. You can take advantage of the 'htmlize' function to get a text representation of the universe:
// eg:
// console.log(htmlize(cells));

// My Solution
function nextGen (cells) {
    let new_cells = JSON.parse(JSON.stringify(cells))
    for(let i=0;i<cells.length;i++){
        for(let j=0;j<cells[i].length;j++){
            let sum=0;
            if(cells[i-1] &&cells[i-1][j-1]){
                sum++;
            };
            if(cells[i-1] &&cells[i-1][j]){
                sum++;
            };
            if(cells[i-1] &&cells[i-1][j+1]){
                sum++;
            };
            if(cells[i][j-1]){
                sum++;
            };
            if(cells[i][j+1]){
                sum++;
            };
            if(cells[i+1] &&cells[i+1][j-1]){
                sum++;
            };
            if(cells[i+1] &&cells[i+1][j]){
                sum++;
            };
            if(cells[i+1] &&cells[i+1][j+1]){
                sum++;
            };
            if(sum==0|| sum==1 || sum>3 ||(sum==2&&cells[i][j]==0)){
                new_cells[i].splice(j,1,0)
            }else if(sum==2|| sum==3){
                new_cells[i].splice(j,1,1)
            };
        };
    };
    return new_cells;
};

// Solution
function nextGen(cells) {
    var get = function (i, j) { return (cells[i] && cells[i][j]) | 0 };
    
    cells = cells.map(function (row, i) {
      return row.map(function (alive, j) {
        var neighbors =
          get(i-1, j-1) + get(i-1, j) + get(i-1, j+1) +
          get(i  , j-1)               + get(i  , j+1) +
          get(i+1, j-1) + get(i+1, j) + get(i+1, j+1);
          
        return (neighbors === 3 || (neighbors === 2 && alive)) | 0;
      });
    });
    
    return cells;
}