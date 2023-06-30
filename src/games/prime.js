import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (value) => {
  const squareRoot = Math.sqrt(value);

  for (let i = 2; i <= squareRoot; i += 1) {
    if (value % i === 0) return false;
  }

  return value > 1;
};

export default () => {
  const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQnA = () => {
    const questionNum = getRandomNumber(1, 25);
    const question = `Question: ${questionNum}`;
    const answer = isPrime(questionNum) ? 'yes' : 'no';

    return [question, answer];
  };

  playGame(message, getQnA);
};
