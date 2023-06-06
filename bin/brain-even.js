#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { getAnsw, getRand, checkAnswer } from '../src/games-functions.js';

const playerName = getName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
while (counter < 3 && counter !== -1) {
    const questionNum = getRand();
    console.log(`Question: ${questionNum}`);

    const corrAnsw = questionNum % 2 === 0 ? 'yes': 'no';
    const playerAnsw = getAnsw();

    counter = checkAnswer(counter, playerAnsw, corrAnsw);
}

if (counter > 0) { 
    console.log(`Congratulations, ${playerName}!`);
} else {
    console.log(`Let's try again, ${playerName}!`);
}