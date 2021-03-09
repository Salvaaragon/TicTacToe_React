import React from 'react';
import SquareButton from './SquareButton';
import { SquareProps } from './types';

const Square: React.FC<SquareProps> = (props: SquareProps) => {
  const { index, squares, onClick } = props;
  const squareButtonOnClick = () => onClick(index);

  return <SquareButton value={squares[index]} onClick={squareButtonOnClick} />;
};

export default Square;
