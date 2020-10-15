import readlineSync from 'readline-sync';

import { car, cdr } from '@hexlet/pairs';

const numberOfRounds = 3;

const gameEngine = (game, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n${gameTask}`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const gameData = game();
    const gameAnswer = car(gameData);
    const question = cdr(gameData);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const isCorrect = (gameAnswer === playerAnswer);
    if (!isCorrect) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    if (isCorrect) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
