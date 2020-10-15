import { cons } from '@hexlet/pairs';

import genNumber from '../numberGenerator.js';

import gameEngine from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  const randomNumber = genNumber(0, 1000);
  const isEven = randomNumber % 2 === 0;
  const answer = isEven ? 'yes' : 'no';
  const pair = cons(answer, randomNumber);
  return pair;
};

const startGame = () => gameEngine(evenGame, gameTask);

export default startGame;
