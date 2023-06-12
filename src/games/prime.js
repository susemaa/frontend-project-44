import playGame from '../index.js';
import { getRand, isPrime } from '../math.js';

export default () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const questionNum = getRand(25);
    questions[i] = `Question: ${questionNum}`;
    answers[i] = isPrime(questionNum) ? 'yes' : 'no';
  }

  playGame(message, questions, answers);
};
