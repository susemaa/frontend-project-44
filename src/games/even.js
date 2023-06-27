import playGame from '../index.js';
import getRandomValue from '../utils.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const questionNum = getRandomValue(0, 100);
    questions[i] = `Question: ${questionNum}`;
    answers[i] = isEven(questionNum) ? 'yes' : 'no';
  }

  playGame(message, questions, answers);
};
