export type GameInfoProps = {
  history: { squares: string[] }[];
  jumpTo: (step: number) => void;
  status: string;
};
