import readlineSync from 'readline-sync';

const playGame = (message, questions, answers) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(message);

  let i;
  const pointsToWin = 3;
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
