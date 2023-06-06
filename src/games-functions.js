import readlineSync from 'readline-sync';
import { playCalc } from './games/calc.js';
import { playEven } from './games/even.js';
import { playGcd } from './games/gcd.js';
//import { playPrime } from './games/prime_1.js';
import { getRand, isPrime } from './math.js';
import { playProgression } from './games/progression.js';

const getAnsw = () => { 
    const answ = readlineSync.question('Your answer: ');

    return answ;
}

const checkAnswer = (counter, playerAnsw, corrAnsw) => {
    if (playerAnsw === corrAnsw) {
        counter += 1;
        console.log('Correct!');
    } else {
        counter = -1;
        console.log(`'${playerAnsw}' is wrong answer ;(. Correct answer was '${corrAnsw}'`);
    }

    return counter;
}

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
            console.log('Answer "yes" if the number is prime, otherwise answer "no".');

            while (counter < 3 && counter !== -1) {
                const questionNum = getRand(25);
                console.log(`Question: ${questionNum}`);
                
                const corrAnsw = isPrime(questionNum) ? 'yes': 'no';
                const playerAnsw = getAnsw();
                
                counter = checkAnswer(counter, playerAnsw, corrAnsw);
            }

            break;
        default: 
            console.log('Wrong gameName');
            counter = -1;
            break;
    }

    return counter;
}

const sayBye = (counter, playerName) => {

    if (counter > 0) { 
        console.log(`Congratulations, ${playerName}!`);
    } else {
        console.log(`Let's try again, ${playerName}!`);
    }
}

export { getAnsw, checkAnswer, sayBye, startGame };