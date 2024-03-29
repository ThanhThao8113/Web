import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import GameBorder from './component/Game';
import UserProfile from './component/UserProfile';
import Board from './component/Board';
import Reset from './component/Reset';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [showMoves, setShowMoves] = useState(false);
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    switchPlayer();
  };

  const switchPlayer = () => {
    setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
  }
  const handleReset = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setCurrentPlayer(1);
    setShowMoves(false);
  };

  const moves = history.map((squares, move) => {
    const description = move > 0 ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
    <GameBorder>
      <div style={{ display: "flex", gap: 40 }}>
        <UserProfile
          image="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png"
          name="Player 1"
          active={currentPlayer == 1} />

        <UserProfile
          image="data:image/png;base64,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"
          name="Player 2"
          active={currentPlayer == 2} />
      </div>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={currentPlayer === 1} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          {showMoves && <ol>{moves}</ol>}
        </div>
      </div>
      <Reset onReset={handleReset} />
    </GameBorder>
  </>
  );
}

export default App;