import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQnA = () => {
    const questionNum = getRandomNumber(0, 100);
    const answer = isEven(questionNum) ? 'yes' : 'no';
    const question = `Question: ${questionNum}`;

    return [question, answer];
  };

  playGame(message, getQnA);
};
