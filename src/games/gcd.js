import { getAnsw, checkAnswer } from './in-games-functions.js';
import { getRand, getGcd } from '../math.js';

const playGcd = () => {
  let counter = 0;
  console.log('Find the greatest common divisor of given numbers.');

  while (counter < 3 && counter !== -1) {
    const [qValue1, qValue2] = [getRand(10) + 1, getRand(10) + 1];
    console.log(`Question: ${qValue1} ${qValue2}`);

    const corrAnsw = getGcd(qValue1, qValue2);
    const playerAnsw = Number(getAnsw());

    counter = checkAnswer(counter, playerAnsw, corrAnsw);
  }

  return counter;
};

export default playGcd;
