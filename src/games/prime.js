import { getRand, isPrime } from "../math.js";
import { getAnsw, checkAnswer } from "../games-functions.js";

const playPrime = () => {
    let counter = 0;
    while (counter < 3 && counter !== -1) {
        console.log('Answer "yes" if the number is prime, otherwise answer "no".');

        const questionNum = getRand(25);
        console.log(`Question: ${questionNum}`);

        const corrAnsw = isPrime(questionNum) ? 'yes': 'no';
        const playerAnsw = getAnsw();

        counter = checkAnswer(counter, playerAnsw, corrAnsw);
    }

    return counter;
};

export { playPrime };