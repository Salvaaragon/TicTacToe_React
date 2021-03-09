export type GameSymbol = 'X' | 'O';

export type BoardProps = {
  squares: GameSymbol[];
  onClick: (index: number) => void;
};
