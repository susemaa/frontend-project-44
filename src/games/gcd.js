import playGame from '../index.js';
import getRandomValue from '../utils.js';

const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};

export default () => {
  const message = 'Find the greatest common divisor of given numbers.';

  const getQnA = () => {
    const [qValue1, qValue2] = [getRandomValue(1, 10), getRandomValue(1, 10)];
    const question = `Question: ${qValue1} ${qValue2}`;
    const answer = String(getGcd(qValue1, qValue2));

    return [question, answer];
  };

  playGame(message, getQnA);
};
