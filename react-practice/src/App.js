import { use, useState } from "react";

function Square({ value, onSquareClick, highlight}) {
  return (
    <button className={`square ${highlight? "highlight": ""}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay}) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares, i);
  }


  const winner = calculateWinner(squares);
  let winningLine= [];
  let status;
  if (winner) {
    status = "Winner: " + winner[0];
    winningLine = winner[1]
  } else {
    if(squares.filter(e=>e!=null).length==9){
       status = "It's a draw"
    }else{
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  }
  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => {
            const i = row * 3 + col;
            const highlight = winningLine.includes(i)
            return (
              <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
                highlight={highlight}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}


export default function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [index, setIndex] = useState([]);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  let order = true;
  let index_table = {
    0: "row 1 col 1",
    1: "row 1 col 2",
    2: "row 1 col 3",
    3: "row 2 col 1",
    4: "row 2 col 2",
    5: "row 2 col 3",
    6: "row 3 col 1",
    7: "row 3 col 2",
    8: "row 3 col 3",
  };
  function handlePlay(nextSquares, ind) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIndex([...index.slice(0,currentMove), index_table[ind]]);
  }

  const moves= history.map((squares, move) => {
    let description;
    if(move==history.length-1 && move!=0){
      description = "You are at move # " + move + ' '+index[move-1];
    } else if (move > 0) {
      description = "Go to move " + move+ ' '+index[move-1];
    } else {
      description = "Go to game start";
    }
    let button =  <button onClick={() => jumpTo(move)}>{description}</button>
    if(move==history.length-1){
      button =  <span >{description}</span>
    }
    return (
      <li key={move}>
       {button}
      </li>
    );
  })

  function reverse_order(){
    order = !order;
    if(!order){
      document.getElementById('reverse_button').style['flex-direction']='column-reverse'
    }else{
      document.getElementById('reverse_button').style['flex-direction']='column'
    }
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <button onClick={reverse_order}>
          Toggle
        </button>
        <ol  id="reverse_button">{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return null;
}
