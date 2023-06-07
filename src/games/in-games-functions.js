import readlineSync from 'readline-sync';

const getAnsw = () => {
  const answ = readlineSync.question('Your answer: ');

  return answ;
};

const checkAnswer = (counter, playerAnsw, corrAnsw) => {
  let newCounter = counter;
  if (playerAnsw === corrAnsw) {
    newCounter += 1;
    console.log('Correct!');
  } else {
    newCounter = -1;
    console.log(`'${playerAnsw}' is wrong answer ;(. Correct answer was '${corrAnsw}'`);
  }

  return newCounter;
};

export { getAnsw, checkAnswer };
