import React from 'react';
import Movement from './Movement';
import { GameInfoProps } from './types';

const GameInfo: React.FC<GameInfoProps> = (props: GameInfoProps) => {
  const { history, jumpTo, status } = props;

  const movements = history.map((_step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';

    return (
      <Movement
        key={move}
        movement={move}
        description={desc}
        onClick={() => jumpTo(move)}
      />
    );
  });

  return (
    <div className="game-info">
      <div>{status}</div>
      <ol>{movements}</ol>
    </div>
  );
};

export default GameInfo;
