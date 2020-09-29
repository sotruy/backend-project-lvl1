import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const brainAPI = (game, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n${gameTask}`);// вывод имени и игрового задания
  for (let i = 0; i < numberOfRounds; i += 1) {
    const isCorrect = game();
    if (isCorrect === false) {
      console.log(`Let's try again, ${userName}!`);
      i = numberOfRounds;// прерывание цикла
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainAPI;
