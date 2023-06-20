import playGame from '../index.js';
import getRandomValue from '../utils.js';

const getExpression = () => {
  const [v1, v2] = [getRandomValue(0, 15), getRandomValue(0, 15)];
  const operationNum = getRandomValue(0, 2);

  switch (operationNum) {
    case 0:
      return [`${v1} + ${v2}`, v1 + v2];
    case 1:
      return [`${v1} - ${v2}`, v1 - v2];
    case 2:
      return [`${v1} * ${v2}`, v1 * v2];
    default:
      throw new Error('Unknown operationNum!');
  }
};

export default () => {
  const message = 'What is the result of the expression?';
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const [expression, questionValue] = getExpression();

    questions[i] = `Question: ${expression}`;
    answers[i] = String(questionValue);
  }

  playGame(message, questions, answers);
};
