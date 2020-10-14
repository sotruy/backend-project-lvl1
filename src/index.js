import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const gameEngine = (game, gameTask, getQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n${gameTask}`);// вывод имени и игрового задания

  for (let i = 0; i < numberOfRounds; i += 1) {
    const question = getQuestion(); // генерация вопроса
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = game(question); // получения правильного ответа для сгенерир-го вопроса
    const isCorrect = (correctAnswer === playerAnswer);
    if (!isCorrect) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
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
