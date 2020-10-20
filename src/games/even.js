import { cons } from '@hexlet/pairs';
import genNumber from '../numberGenerator.js';
import gameEngine from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQandA = () => {
  const question = genNumber(0, 1000);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  const pair = cons(answer, question);
  return pair;
};

const startGame = () => gameEngine(getQandA, gameTask);

export default startGame;
