import { cons } from '@hexlet/pairs';
import genNumber from '../numberGenerator.js';
import gameEngine from '../index.js';

export const gameTask = 'What number is missing in the progression?';

const getQuestion = (firstNum, progLength, progDiff, hiddenIndex) => {
  const iter = (counter, acc) => {
    if (counter === progLength) {
      return acc;
    }
    if (counter === hiddenIndex) {
      return iter(counter + 1, `${acc}.. `);
    }
    return iter(counter + 1, `${acc}${firstNum + counter * progDiff} `);
  };

  return iter(0, '');
};

const getQandA = () => {
  const firstNum = genNumber(0, 100);
  const progLength = genNumber(5, 10);
  const progDiff = genNumber(1, 5);
  const hiddenIndex = genNumber(0, progLength - 1);

  const answer = firstNum + hiddenIndex * progDiff;
  const question = getQuestion(firstNum, progLength, progDiff, hiddenIndex);
  const pair = cons(String(answer), question);
  return pair;
};

const startGame = () => gameEngine(getQandA, gameTask);

export default startGame;
