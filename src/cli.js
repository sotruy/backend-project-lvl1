import readlineSync from 'readline-sync';
import startEvenGame from './games/even.js';
import startCalcGame from './games/calc.js';
import startGcdGame from './games/gcd.js';
import startPrimeGame from './games/prime.js';
import startProgressionGame from './games/progression.js';

const askGame = () => {
  console.log('Welcome to the Brain Games!\nHere is the list of ours games:');
  const games = ['Brain-even', 'Brain-calc', 'Brain-gcd', 'Brain-prime', 'Brain-progression'];
  const index = readlineSync.keyInSelect(games, 'Choose the game you want to play (press 1..5 key)\n', {
    guide: false,
    hideEchoBack: true,
    mask: ' ',
  });
  if (index === -1) {
    return;
  }
  console.log(`You chose the ${games[index]} game!`);
  switch (index + 1) {
    case 1:
      startEvenGame();
      break;
    case 2:
      startCalcGame();
      break;
    case 3:
      startGcdGame();
      break;
    case 4:
      startPrimeGame();
      break;
    default:
      startProgressionGame();
      break;
  }
};

export default askGame;
