import React from 'react';
import { SquareButtonProps } from './types';

const SquareButton: React.FC<SquareButtonProps> = (
  props: SquareButtonProps,
) => {
  const { value, onClick } = props;

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default SquareButton;
