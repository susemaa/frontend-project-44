import playGame from '../index.js';
import { getRand } from '../math.js';

export default () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const questionNum = getRand();
    questions[i] = `Question: ${questionNum}`;
    answers[i] = questionNum % 2 === 0 ? 'yes' : 'no';
  }

  playGame(message, questions, answers);
};
