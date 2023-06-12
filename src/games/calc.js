import playGame from '../index.js';
import { getOperation, getRand } from '../math.js';

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
