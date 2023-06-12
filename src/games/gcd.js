import playGame from '../index.js';
import { getRand, getGcd } from '../math.js';

export default () => {
  const message = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const [qValue1, qValue2] = [getRand(10) + 1, getRand(10) + 1];
    questions[i] = `Question: ${qValue1} ${qValue2}`;
    answers[i] = String(getGcd(qValue1, qValue2));
  }

  playGame(message, questions, answers);
};
