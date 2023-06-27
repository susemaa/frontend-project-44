import playGame from '../index.js';
import getRandomValue from '../utils.js';

const getExpression = () => {
  const [value1, value2] = [getRandomValue(0, 15), getRandomValue(0, 15)];
  const operationNum = getRandomValue(0, 2);

  switch (operationNum) {
    case 0:
      return [`${value1} + ${value2}`, value1 + value2];
    case 1:
      return [`${value1} - ${value2}`, value1 - value2];
    case 2:
      return [`${value1} * ${value2}`, value1 * value2];
    default:
      throw new Error('Unknown operationNum!');
  }
};

const playCalc = () => {
  const message = 'What is the result of the expression?';

  const getQnA = () => {
    const [expression, questionValue] = getExpression();
    const question = `Question: ${expression}`;
    const answer = String(questionValue);

    return [question, answer];
  };

  playGame(message, getQnA);
};

export default playCalc;
