import readlineSync from 'readline-sync';

import genNumber from '../numberGenerator.js';

export const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

export const evenQuestion = () => {
  const randomNumber = genNumber(0, 1000);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;
  if (isEven && answer !== 'yes') {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
    return false;
  } if (!isEven && answer !== 'no') {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
    return false;
  }
  console.log('Correct!');
  return true;
};
