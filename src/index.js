import readlineSync from 'readline-sync';
import getName from './cli.js';

const getAnsw = () => {
  const answ = readlineSync.question('Your answer: ');

  return answ;
};

const sayBye = (counter, playerName) => {
  if (counter === 3) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

const playGame = (message, questions, answers) => {
  const playerName = getName();

  console.log(message);

  let i;
  for (i = 0; i < 3; i += 1) {
    console.log(questions[i]);
    const playerAnsw = getAnsw();
    if (playerAnsw === answers[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnsw}' is wrong answer ;(. Correct answer was '${answers[i]}'`);
      break;
    }
  }

  sayBye(i, playerName);
};

export default playGame;
