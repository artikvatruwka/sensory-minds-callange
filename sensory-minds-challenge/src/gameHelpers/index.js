import { skyrimBingoCards } from "../assets";

const shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

export const generateBingoCell = (phrase, checked = false) => ({
  phrase,
  checked,
});

export const generateBingoField = (
  phrases = skyrimBingoCards,
  cellsCount = 5
) => {
  const shuffledPhrases = shuffle([...phrases]);
  let gameField = [...Array(cellsCount)].map(
    (row) => (row = [...Array(cellsCount)])
  );
  for (let row = 0; row < cellsCount; row++) {
    for (let column = 0; column < cellsCount; column++) {
      const isCenterCell =
        row === Math.floor(cellsCount / 2) &&
        column === Math.floor(cellsCount / 2);

      if (!isCenterCell) {
        const phrase = shuffledPhrases.pop();
        if (phrase) {
          gameField[row][column] = generateBingoCell(phrase);
        } else {
          gameField[row][column] = generateBingoCell(
            "Author didn't added 24 phrases 🤦‍♂️"
          );
        }
      } else {
        gameField[row][column] = generateBingoCell(null, true);
      }
    }
  }
  return gameField;
};
