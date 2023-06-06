import readlineSync from 'readline-sync';
import { getRand, getOperation, getGcd } from './math.js'

const getAnsw = () => { 
    const answ = readlineSync.question('Your answer: ');

    return answ;
}

const getExpression = () => {
    const [v1, v2] = [getRand(15), getRand(15)];
    const operation = getOperation();
    const expressionStr = `${v1} ${operation} ${v2}`;

    switch (operation) {
        case '+':
            return [expressionStr, v1 + v2];
        case '-':
            return [expressionStr, v1 - v2];
        case '*':
            return [expressionStr, v1 * v2];
    }
};

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
            while (counter < 3 && counter !== -1) {
                console.log('Answer "yes" if the number is even, otherwise answer "no".');

                const questionNum = getRand();
                console.log(`Question: ${questionNum}`);
            
                const corrAnsw = questionNum % 2 === 0 ? 'yes': 'no';
                const playerAnsw = getAnsw();
            
                counter = checkAnswer(counter, playerAnsw, corrAnsw);
            }

            break;

        case 'calc':
            console.log('What is the result of the expression?');

            while (counter < 3 && counter !== -1) {
                const [questionStr, questionValue] = getExpression();
                console.log(`Question: ${questionStr}`);
            
                const corrAnsw = questionValue;
                const playerAnsw = Number(getAnsw());
            
                counter = checkAnswer(counter, playerAnsw, corrAnsw);
            }

            break;

        case 'gcd':
            console.log('Find the greatest common divisor of given numbers.');

            while (counter < 3 && counter !== -1) {
                const [qValue1, qValue2] = [getRand(10) + 1, getRand(10) + 1];
                console.log(`Question: ${qValue1} ${qValue2}`);
            
                const corrAnsw = getGcd(qValue1, qValue2);
                const playerAnsw = Number(getAnsw());
            
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

export { getAnsw, getRand, getExpression, checkAnswer, sayBye, startGame };