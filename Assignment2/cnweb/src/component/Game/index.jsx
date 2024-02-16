import {useState} from 'react';
import './style.css';

const GameBorder = ({ children }) => {
  return <div className="red-border">{children}</div>;
};

export default GameBorder;
