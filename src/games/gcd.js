import readlineSync from 'readline-sync';

import genNumber from '../numberGenerator.js';

export const gameTask = 'Find the greatest common divisor of given numbers.';

// greatest common divisor based on binary algorithm
const calculateGCD = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  if (firstNum === 0) {
    return secondNum;
  }
  // eslint-disable-next-line consistent-return
  const iter = (num1, num2, k) => {
    if (num1 === num2) {
      return k * num2;
    }
    if (num1 === 1 || num2 === 1) {
      return k;
    }
    const isNum1Even = num1 % 2 === 0;
    const isNum2Even = num2 % 2 === 0;
    if (isNum1Even) {
      return isNum2Even ? iter(num1 / 2, num2 / 2, k * 2) : iter(num1 / 2, num2, k);
    }
    if (!isNum1Even) {
      if (isNum2Even) {
        return iter(num1, num2 / 2, k);
      } if (!isNum2Even) {
        return num1 > num2 ? iter((num1 - num2) / 2, num2, k) : iter(num1, (num2 - num1) / 2, k);
      }
    }
  };
  return iter(firstNum, secondNum, 1);
};

export const gcdQuestion = () => {
  const firstNum = genNumber(0, 100);
  const secondNum = genNumber(0, 100);
  console.log(`Question: ${firstNum} ${secondNum}`);
  const result = calculateGCD(firstNum, secondNum);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) !== result) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}".`);
    return false;
  }
  console.log('Correct!');
  return true;
};