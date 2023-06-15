import playGame from '../index.js';
import getRand from '../utils.js';

const getOperation = () => {
  const operationNum = getRand(3);

  if (operationNum === 0) {
    return '+';
  }
  if (operationNum === 1) {
    return '-';
  }
  if (operationNum === 2) {
    return '*';
  }

  return '';
};

const getExpression = () => {
  const [v1, v2] = [getRand(15), getRand(15)];
  const operation = getOperation();

  switch (operation) {
    case '+':
      return [v1, v2, operation, v1 + v2];
    case '-':
      return [v1, v2, operation, v1 - v2];
    case '*':
      return [v1, v2, operation, v1 * v2];
    default:
      return [0, 0, '+', 0];
  }
};

export default () => {
  const message = 'What is the result of the expression?';
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const [v1, v2, operation, questionValue] = getExpression();
    questions[i] = `Question: ${v1} ${operation} ${v2}`;
    answers[i] = String(questionValue);
  }

  playGame(message, questions, answers);
};
