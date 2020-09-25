import readlineSync from 'readline-sync';

import getNumber from './numberGenerator.js';

const askQuestion = () => {
  const randomNumber = getNumber();
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;
  const isOdd = randomNumber % 2 !== 0;
  if (isEven && answer !== 'yes') {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "yes".`);
    return false;
  } if (isOdd && answer !== 'no') {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "no".`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0, j = 3; i < j; i += 1) {
    const isCorrect = askQuestion();
    if (isCorrect === false) {
      const failWarning = console.log(`Let's try again, ${userName}!`);
      i = j;
      return failWarning;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainEven;
