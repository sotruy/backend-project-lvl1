import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const numberOfRounds = 3;

const gameEngine = (game, gameTask) => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n${gameTask}`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const gameData = game();
    const gameAnswer = car(gameData);
    const question = cdr(gameData);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (gameAnswer !== playerAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
