import playGame from '../index.js';
import getRandomValue from '../utils.js';

const createProgression = () => {
  const progression = [];
  progression[0] = String(getRandomValue(1, 10));
  const progressionStep = getRandomValue(1, 10);

  for (let i = 1; i < 10; i += 1) {
    progression.push(String(Number(progression[i - 1]) + progressionStep));
  }

  const missedId = getRandomValue(10);
  const missedValue = progression[missedId];
  progression[missedId] = '..';

  return [progression, missedValue];
};

export default () => {
  const message = 'What number is missing in the progression?';
  const questions = [];
  const answers = [];
  for (let i = 0; i < 3; i += 1) {
    const [progression, corrAnsw] = createProgression();
    const stringedProgression = progression.join(' ');
    questions[i] = `Question: ${stringedProgression}`;
    console.log(questions[i]);
    answers[i] = corrAnsw;
  }

  playGame(message, questions, answers);
};
