import { getAnsw, checkAnswer } from './in-games-functions.js';
import { createProgression } from '../math.js';

const playProgression = () => {
  console.log('What number is missing in the progression?');
  let counter = 0;

  while (counter < 3 && counter !== -1) {
    const [progression, corrAnsw] = createProgression();
    process.stdout.write('Question: ');
    console.log(...progression);

    const playerAnsw = getAnsw();

    counter = checkAnswer(counter, playerAnsw, corrAnsw);
  }

  return counter;
};

export default playProgression;
