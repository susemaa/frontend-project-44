import { getAnsw, checkAnswer } from './in-games-functions.js';
import { getRand } from '../math.js';

const playEven = () => {
  let counter = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (counter < 3 && counter !== -1) {
    const questionNum = getRand();
    console.log(`Question: ${questionNum}`);

    const corrAnsw = questionNum % 2 === 0 ? 'yes' : 'no';
    const playerAnsw = getAnsw();

    counter = checkAnswer(counter, playerAnsw, corrAnsw);
  }

  return counter;
};

export default playEven;
