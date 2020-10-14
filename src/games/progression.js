import genNumber from '../numberGenerator.js';

import gameEngine from '../index.js';

export const gameTask = 'What number is missing in the progression?';

const genProgression = (progLength, firstNum, progDiff) => { // функция генерации арифм. прогрессии
  const progArray = [firstNum];
  const currentNum = firstNum;
  if (progArray.length === progLength + 1) {
    return [];
  }
  return progArray.concat(genProgression(progLength - 1, currentNum + progDiff, progDiff));
};

const question = () => { // функция генерации прогрессии со скрытым числом
  const firstNum = genNumber(0, 100);
  const progLength = genNumber(5, 10);
  const progDiff = genNumber(1, 5); // разница прогрессии
  const hiddenIndex = genNumber(0, progLength - 1); // индекс скрытого числа
  const progression = genProgression(progLength, firstNum, progDiff);
  progression[hiddenIndex] = '..';
  return `${progression.join(' ')}`;
};

export const progressionGame = (questionData) => {
  const progArr = questionData.split(' '); // получаем массив из полученной прогрессии
  const indexOfNum = progArr.indexOf('..'); // определяем индекс скрытого элемента в массиве
  if (indexOfNum === 0) { // определяем скрытое число, если его индекс = 0
    const diff = Number(progArr[indexOfNum + 2]) - Number(progArr[indexOfNum + 1]);
    const answer = String((Number(progArr[indexOfNum + 1]) - diff));
    return answer;
  }
  if (indexOfNum === progArr.length - 1) { // определяем число, если его индекс последний
    const diff = Number(progArr[indexOfNum - 1]) - Number(progArr[indexOfNum - 2]);
    const answer = String((Number(progArr[indexOfNum - 1]) + diff));
    return answer;
  }
  const answer = String((Number(progArr[indexOfNum - 1]) + Number(progArr[indexOfNum + 1])) / 2);
  return answer; // определяем скрытое число в остальных случаях
};

const startGame = () => gameEngine(progressionGame, gameTask, question);

export default startGame;
