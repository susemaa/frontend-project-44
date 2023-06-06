#!/usr/bin/env node
import { getName } from '../src/cli.js'
import { getAnsw, getExpression, checkAnswer, isWin } from '../src/games-functions.js';

const playerName = getName();

console.log('What is the result of the expression?');

let counter = 0;
while (counter < 3 && counter !== -1) {
    const [questionStr, questionValue] = getExpression();
    console.log(`Question: ${questionStr}`);

    const corrAnsw = questionValue;
    const playerAnsw = getAnsw();

    counter = checkAnswer(counter, playerAnsw, corrAnsw);
}

isWin();