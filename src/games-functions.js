import playCalc from './games/calc.js';
import playEven from './games/even.js';
import playGcd from './games/gcd.js';
import playPrime from './games/prime.js';
import playProgression from './games/progression.js';

const startGame = (gameName) => {
  let counter = 0;

  switch (gameName) {
    case 'even':
      counter = playEven();

      break;
    case 'calc':
      counter = playCalc();

      break;
    case 'gcd':
      counter = playGcd();

      break;
    case 'progression':
      counter = playProgression();

      break;
    case 'prime':
      counter = playPrime();

      break;
    default:
      console.log('Wrong gameName');
      counter = -1;
      break;
  }

  return counter;
};

const sayBye = (counter, playerName) => {
  if (counter > 0) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export { startGame, sayBye };
