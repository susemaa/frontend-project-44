import readlineSync from 'readline-sync';

const playGame = (message, questions, answers) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(message);

  const pointsToWin = 3;
  for (let i = 0; i < pointsToWin; i += 1) {
    console.log(questions[i]);
    const playerAnsw = readlineSync.question('Your answer: ');

    if (playerAnsw === answers[i]) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${playerName}!`);
      }
    } else {
      console.log(`'${playerAnsw}' is wrong answer ;(. Correct answer was '${answers[i]}'`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
};

export default playGame;
