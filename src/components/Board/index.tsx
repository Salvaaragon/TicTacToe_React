import React from 'react';
import Square from './Square';
import { BoardProps } from './types';

const Board: React.FC<BoardProps> = (props: BoardProps) => {
  const { squares, onClick } = props;

  return (
    <div>
      <div className="board-row">
        <Square index={0} squares={squares} onClick={onClick} />
        <Square index={1} squares={squares} onClick={onClick} />
        <Square index={2} squares={squares} onClick={onClick} />
      </div>
      <div className="board-row">
        <Square index={3} squares={squares} onClick={onClick} />
        <Square index={4} squares={squares} onClick={onClick} />
        <Square index={5} squares={squares} onClick={onClick} />
      </div>
      <div className="board-row">
        <Square index={6} squares={squares} onClick={onClick} />
        <Square index={7} squares={squares} onClick={onClick} />
        <Square index={8} squares={squares} onClick={onClick} />
      </div>
    </div>
  );
};

export default Board;
