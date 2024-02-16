import React from 'react';
import './style.css';

const Square = ({ value, onSquareClick }) => {
    const getSquareClass = () => {
      if (value === 'X') {
        return 'square square-x';
      } else if (value === 'O') {
        return 'square square-o';
      } else {
        return 'square';
      }
    };
  
    return (
      <button className={getSquareClass()} onClick={onSquareClick}>
        {value}
      </button>
    );
  };

export default Square;
