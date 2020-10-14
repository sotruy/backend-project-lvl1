import genNumber from '../numberGenerator.js';

import gameEngine from '../index.js';

const gameTask = 'What is the result of the expression?';

const question = () => { // функция генерации мат. выражения
  const firstNum = genNumber(0, 30);
  const secondNum = genNumber(0, 30);
  const operatorIndex = genNumber(0, 2);
  const listOfOperators = ['+', '-', '*'];
  const randomOperator = listOfOperators[operatorIndex];
  return `${firstNum} ${randomOperator} ${secondNum}`;
};

const calcGame = (questionData) => { // функция получения правильного ответа из выражения
  const [firstNum, operator, secondNum] = questionData.split(' ');// определяем числа и оператор из полученной строки

  const calculate = (num1, operation, num2) => {
    if (operation === '*') {
      return String(Number(num1) * Number(num2));
    } if (operation === '-') {
      return String(Number(num1) - Number(num2));
    }
    return String(Number(num1) + Number(num2));
  };

  const answer = calculate(firstNum, operator, secondNum);
  return answer;
};

const startGame = () => gameEngine(calcGame, gameTask, question);

export default startGame;
