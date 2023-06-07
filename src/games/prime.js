import { getAnsw, checkAnswer } from "../games-functions.js";
import { getRand, isPrime } from "../math.js";

const playPrime = () => {
    let counter = 0;
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    while (counter < 3 && counter !== -1) {
        const questionNum = getRand(25);
        console.log(`Question: ${questionNum}`);
            
        const corrAnsw = isPrime(questionNum) ? 'yes': 'no';
        const playerAnsw = getAnsw();
            
        counter = checkAnswer(counter, playerAnsw, corrAnsw);
    }

    return counter;
};

export { playPrime };