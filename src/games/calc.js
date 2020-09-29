import readlineSync from 'readline-sync';

import genNumber from '../numberGenerator.js';

export const gameTask = 'What is the result of the expression?';

const calculate = (firstNum, secondNum, operator) => {
  if (operator === '*') {
    return firstNum * secondNum;
  } if (operator === '-') {
    return firstNum - secondNum;
  }
  return firstNum + secondNum;
};

export const calcQuestion = () => {
  const firstNum = genNumber(0, 30);
  const secondNum = genNumber(0, 30);
  const operatorIndex = genNumber(0, 2);
  const listOfOperators = ['+', '-', '*'];
  const randomOperator = listOfOperators[operatorIndex];
  console.log(`Question: ${firstNum} ${randomOperator} ${secondNum}`);
  const result = calculate(firstNum, secondNum, randomOperator);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) !== result) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
    return false;
  }
  console.log('Correct!');
  return true;
};
