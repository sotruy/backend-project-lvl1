import { cons } from '@hexlet/pairs';

import genNumber from '../numberGenerator.js';

import gameEngine from '../index.js';

export const gameTask = 'What number is missing in the progression?';

const genProgression = (progLength, firstNum, progDiff) => { // generate arithmetic progression
  const progArray = [firstNum];
  const currentNum = firstNum;
  if (progArray.length === progLength + 1) {
    return [];
  }
  return progArray.concat(genProgression(progLength - 1, currentNum + progDiff, progDiff));
};

export const progressionGame = () => {
  const firstNum = genNumber(0, 100);
  const progLength = genNumber(5, 10);
  const progDiff = genNumber(1, 5);
  const progression = genProgression(progLength, firstNum, progDiff);
  const hiddenIndex = genNumber(0, progLength - 1);
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = `${progression.join(' ')}`;

  const pair = cons(String(answer), question);
  return pair;
};

const startGame = () => gameEngine(progressionGame, gameTask);

export default startGame;
