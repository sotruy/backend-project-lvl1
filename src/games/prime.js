import { cons } from '@hexlet/pairs';
import genNumber from '../numberGenerator.js';
import gameEngine from '../index.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => { // trial division algorithm
  if (num % 2 === 0 && num !== 2) {
    return false;
  }
  if (num === 1) {
    return false;
  }
  const iter = (number, i) => {
    if (i > Math.sqrt(number)) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }
    return iter(number, i + 2);
  };
  return iter(num, 3);
};

export const getQandA = () => {
  const question = genNumber(0, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  const pair = cons(answer, question);
  return pair;
};

const startGame = () => gameEngine(getQandA, gameTask);

export default startGame;
