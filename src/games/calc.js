import playGame from '../index.js';
import getRandomNumber from '../utils.js';

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
    const randomNumber1 = getRandomNumber(1, 30);
    const randomNumber2 = getRandomNumber(1, 30);
    const operators = '+-*';
    const indexOperator = getRandomNumber(0, operators.length - 1);
    const randomOperator = operators[indexOperator];
    const question = `Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`;
    const answer = String(getCorrectAnswer(randomNumber1, randomNumber2, randomOperator));

    return [question, answer];
  };

  playGame(message, getQnA);
};

export default playCalc;
