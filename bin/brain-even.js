#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { getAnsw, getRand } from '../src/games-functions.js';

const playerName = getName();
console.log(`Hello, ${playerName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
while (counter < 3 && counter !== -1) {
    const questionNum = getRand();
    console.log(`Question: ${questionNum}`);

    const corrAnsw = questionNum % 2 === 0 ? 'yes': 'no';
    const userAnsw = getAnsw();

    if (userAnsw === corrAnsw) {
        counter += 1;
        console.log('Correct!');
    } else {
        counter = -1;
        console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${corrAnsw}'`);
        console.log(`Let's try again, ${playerName}!`);
    }
}

if (counter > 0) {
    console.log(`Congratulations, ${playerName}!`);
}