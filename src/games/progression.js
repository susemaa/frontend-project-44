import playGame from '../index.js';
import { createProgression } from '../math.js';

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
