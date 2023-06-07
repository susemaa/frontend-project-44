import readlineSync from 'readline-sync';

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

export { getAnsw, checkAnswer };