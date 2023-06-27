import playGame from '../index.js';
import getRandomValue from '../utils.js';

const createProgression = () => {
  const progression = [];
  progression[0] = String(getRandomValue(1, 10));
  const progressionStep = getRandomValue(1, 10);

  for (let i = 1; i < 10; i += 1) {
    progression.push(String(Number(progression[i - 1]) + progressionStep));
  }

  const missedId = getRandomValue(0, 9);
  const missedValue = progression[missedId];
  progression[missedId] = '..';

  return [progression, missedValue];
};

export default () => {
  const message = 'What number is missing in the progression?';

  const getQnA = () => {
    const [progression, answer] = createProgression();
    const stringedProgression = progression.join(' ');
    const question = `Question: ${stringedProgression}`;

    return [question, answer];
  };

  playGame(message, getQnA);
};
