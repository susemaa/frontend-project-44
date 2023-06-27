import playGame from '../index.js';
import getRandomValue from '../utils.js';

const getRandomOperator = () => {
  const operatorNum = getRandomValue(0, 2);
  switch (operatorNum) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      throw new Error('Unknown operationNum!');
  }
};

const getCorrectAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Unknown operator!');
  }
};

const playCalc = () => {
  const message = 'What is the result of the expression?';

  const getQnA = () => {
    const randomNumber1 = getRandomValue(1, 30);
    const randomNumber2 = getRandomValue(1, 30);
    const randomOperator = getRandomOperator();
    const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const answer = String(getCorrectAnswer(randomNumber1, randomNumber2, randomOperator));

    return [question, answer];
  };

  playGame(message, getQnA);
};

export default playCalc;
