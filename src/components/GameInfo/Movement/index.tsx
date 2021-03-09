import React from 'react';
import { MovementProps } from './types';

const Movement: React.FC<MovementProps> = (props: MovementProps) => {
  const { description, movement, onClick } = props;

  return (
    <li key={movement}>
      <button onClick={onClick}>{description}</button>
    </li>
  );
};

export default Movement;
