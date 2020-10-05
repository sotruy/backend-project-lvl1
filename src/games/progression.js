import readlineSync from 'readline-sync';

import genNumber from '../numberGenerator.js';

export const gameTask = 'What number is missing in the progression?';

// const getProgression = () => {
//   const progLength = genNumber(5, 10);
//   const firstNum = genNumber(0, 100);
//   const progDiff = genNumber(1, 5);
//   const progArray = [firstNum];
//   for (let i = 0; i < progLength - 1; i += 1) {
//     progArray.push(firstNum + progDiff);
//   }
//   return progArray;
// };

const genProgression = (progLength, firstNum, progDiff) => {
  const progArray = [firstNum];
  const currentNum = firstNum;
  if (progArray.length === progLength + 1) {
    return [];
  }
  return progArray.concat(genProgression(progLength - 1, currentNum + progDiff, progDiff));
};

export const progressionQuestion = () => {
  const firstNum = genNumber(0, 100);
  const progLength = genNumber(5, 10);
  const progDiff = genNumber(1, 5);
  const hiddenNumber = genNumber(0, progLength - 1);
  const progression = genProgression(progLength, firstNum, progDiff);
  const rightAnswer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  if (Number(answer) !== rightAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
    return false;
  }
  console.log('Correct!');
  return true;
};
