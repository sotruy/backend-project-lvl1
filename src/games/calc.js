import { cons } from '@hexlet/pairs';

import genNumber from '../numberGenerator.js';

import gameEngine from '../index.js';

const gameTask = 'What is the result of the expression?';

const calcGame = () => {
  const firstNum = genNumber(0, 30);
  const secondNum = genNumber(0, 30);
  const operatorIndex = genNumber(0, 2);
  const listOfOperators = ['+', '-', '*'];
  const randomOperator = listOfOperators[operatorIndex];
  const question = `${firstNum} ${randomOperator} ${secondNum}`;

  const calculate = (num1, operator, num2) => {
    if (operator === '*') {
      return String(Number(num1) * Number(num2));
    } if (operator === '-') {
      return String(Number(num1) - Number(num2));
    }
    return String(Number(num1) + Number(num2));
  };

  const answer = calculate(firstNum, randomOperator, secondNum);
  const pair = cons(answer, question);
  return pair;
};

const startGame = () => gameEngine(calcGame, gameTask);

export default startGame;
