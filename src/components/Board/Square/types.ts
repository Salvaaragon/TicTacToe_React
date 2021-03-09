import { GameSymbol } from '../types';

export type SquareProps = {
  index: number;
  squares: GameSymbol[];
  onClick: (index: number) => void;
};
