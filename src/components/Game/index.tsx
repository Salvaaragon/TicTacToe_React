import React, { useEffect, useState } from 'react';
import { calculateWinner } from '../../utils/calculateWinner';
import Board from '../Board';
import GameInfo from '../GameInfo';
import { GameHistory } from './types';

const initHistoryState = [{ squares: Array(9).fill(null) }];

const Game: React.FC = () => {
  const [history, setHistory] = useState<GameHistory>(initHistoryState);
  const [stepNumber, setStepNumber] = useState(0);
  const [status, setStatus] = useState('');
  const [xIsNext, setXIsNext] = useState(true);
  const current = history[stepNumber];

  const handleClick = (index: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const squares = newCurrent.squares.slice();

    if (calculateWinner(squares) || squares[index]) return;

    squares[index] = xIsNext ? 'X' : 'O';

    setHistory(newHistory.concat([{ squares: squares }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  useEffect(() => {
    const winner = calculateWinner(current.squares);

    if (winner) setStatus('Winner: ' + winner);
    else setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
  }, []);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <GameInfo status={status} history={history} jumpTo={jumpTo} />
    </div>
  );
};

export default Game;
