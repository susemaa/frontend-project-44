import readlineSync from 'readline-sync';

const playGame = (message, getQnA) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(message);

  const pointsToWin = 3;
  for (let i = 0; i < pointsToWin; i += 1) {
    const [question, answer] = getQnA();
    console.log(question);
    const playerAnsw = readlineSync.question('Your answer: ');

    if (playerAnsw === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnsw}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
