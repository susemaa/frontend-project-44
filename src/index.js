import readlineSync from 'readline-sync';
import getName from './cli.js';

const playGame = (message, questions, answers) => {
  const pointsToWin = 3;
  const playerName = getName();

  console.log(message);

  let i;
  for (i = 0; i < pointsToWin; i += 1) {
    console.log(questions[i]);
    const playerAnsw = readlineSync.question('Your answer: ');
    if (playerAnsw === answers[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnsw}' is wrong answer ;(. Correct answer was '${answers[i]}'`);
      break;
    }
  }

  if (i === 3) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export default playGame;
