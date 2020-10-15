import { cons } from '@hexlet/pairs';

import genNumber from '../numberGenerator.js';

import gameEngine from '../index.js';

export const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const trialDivision = (num) => { // trial division algorithm
  if (num % 2 === 0 && num !== 2) {
    return false;
  }
  if (num === 1) {
    return false;
  }
  const iter = (number, i) => {
    if (i === number) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }
    return iter(number, i + 1);
  };
  return iter(num, 2);
};

export const primeGame = () => {
  const randomNumber = genNumber(0, 1000);
  const isPrime = trialDivision(randomNumber);
  const answer = isPrime ? 'yes' : 'no';
  const pair = cons(answer, randomNumber);
  return pair;
};

const startGame = () => gameEngine(primeGame, gameTask);

export default startGame;
