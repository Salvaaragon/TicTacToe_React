export const calculateWinner = (squares: ('X' | 'O')[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < lines.length; index++) {
    const [col1, col2, col3] = lines[index];

    if (squares[col1]) {
      if (squares[col1] === squares[col2]) {
        if (squares[col2] === squares[col3]) {
          return squares[col1];
        }
      }
    }
  }
  return null;
};
