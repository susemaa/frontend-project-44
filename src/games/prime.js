import playGame from '../index.js';
import getRandomValue from '../utils.js';

const isPrime = (value) => {
  for (let i = 2, s = Math.sqrt(value); i <= s; i += 1) {
    if (value % i === 0) return false;
  }

  return value > 1;
};

export default () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const questionNum = getRandomValue(1, 25);
    questions[i] = `Question: ${questionNum}`;
    answers[i] = isPrime(questionNum) ? 'yes' : 'no';
  }

  playGame(message, questions, answers);
};
