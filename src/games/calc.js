import { cons } from '@hexlet/pairs';
import genNumber from '../numberGenerator.js';
import gameEngine from '../index.js';

const gameTask = 'What is the result of the expression?';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '*':
      return (num1 * num2);
    case '-':
      return (num1 - num2);
    case '+':
      return (num1 + num2);
    default:
      return (num1 + num2);
  }
};

const getQandA = () => {
  const firstNum = genNumber(0, 30);
  const secondNum = genNumber(0, 30);
  const operators = ['+', '-', '*'];
  const operatorIndex = genNumber(0, operators.length - 1);
  const randomOperator = operators[operatorIndex];
  const question = `${firstNum} ${randomOperator} ${secondNum}`;

  const answer = calculate(firstNum, randomOperator, secondNum);
  const pair = cons(String(answer), question);
  return pair;
};

const startGame = () => gameEngine(getQandA, gameTask);

export default startGame;
