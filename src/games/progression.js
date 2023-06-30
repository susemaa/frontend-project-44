import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const createProgression = (firstNumber, step, missedIndex) => {
  const progression = [];
  progression[0] = String(firstNumber);

  for (let i = 1; i < 10; i += 1) {
    progression.push(String(Number(progression[i - 1]) + step));
  }

  const missedValue = progression[missedIndex];
  progression[missedIndex] = '..';

  return [progression, missedValue];
};

export default () => {
  const message = 'What number is missing in the progression?';

  const getQnA = () => {
    const firstNumber = getRandomNumber(1, 10);
    const progressionStep = getRandomNumber(1, 10);
    const missedIndex = getRandomNumber(0, 9);

    const [progression, answer] = createProgression(firstNumber, progressionStep, missedIndex);
    const stringedProgression = progression.join(' ');
    const question = `Question: ${stringedProgression}`;

    return [question, answer];
  };

  playGame(message, getQnA);
};
