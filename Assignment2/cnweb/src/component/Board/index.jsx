import React from 'react';
import Square from '../Square';
import './style.css';

  export function calculateWinner(squares) {
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
        return squares[a];
      }
    }
    return null;
  }

  function Board({ xIsNext, squares, onPlay }) {
    const handleClick = (i) => {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      nextSquares[i] = xIsNext ? 'X' : 'O';
      onPlay(nextSquares);
    };
  
    const renderSquare = (i) => {
      return <Square value={squares[i]} onSquareClick={() => handleClick(i)} />;
    };
  
    const winner = calculateWinner(squares);
    const winningPlayer = winner === 'X' ? 'Player 1' : winner === 'O' ? 'Player 2' : null;
  
    return (
      <>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div className="status" style={{color: winner ? 'green' : 'black',fontWeight: winner ? 'bold' : 'normal',}}>
          {winner ? `${winningPlayer} is the winner!` : `Next player: ${xIsNext ? 'Player 1' : 'Player 2'}`}
        </div>
      </>
    );
  }
  
export default Board;
