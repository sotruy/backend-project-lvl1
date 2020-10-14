import genNumber from '../numberGenerator.js';

import gameEngine from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNumber = () => genNumber(0, 1000);

const evenGame = (num) => {
  const isEven = num % 2 === 0;
  const answer = isEven ? 'yes' : 'no';
  return answer;
};

const startGame = () => gameEngine(evenGame, gameTask, randomNumber);

export default startGame;
