import readlineSync from 'readline-sync';

import genNumber from '../numberGenerator.js';

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

export const primeQuestion = () => {
  const randomNumber = genNumber(0, 1000);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const isPrime = trialDivision(randomNumber);
  if (isPrime && answer !== 'yes') {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
    return false;
  } if (!isPrime && answer !== 'no') {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
    return false;
  }
  console.log('Correct!');
  return true;
};
