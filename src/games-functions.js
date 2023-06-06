import readlineSync from 'readline-sync';

const getAnsw = () => { 
    const answ = readlineSync.question('Your answer: ');

    return answ;
}

const getRand = (maxValue = 100) => {
    return Math.floor(Math.random() * maxValue); // < maxValue
}

const getOperation = () => {
    const operationNum = getRand(3);
    switch (operationNum) {
        case 0:
            return '+';
        case 1:
            return '-';
        case 2:
            return '*';
    }
};

const getExpression = () => {
    const [v1, v2] = [getRand(15), getRand(15)];
    const operation = getOperation();
    const expressionStr = `${v1}${operation}${v2}`;

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

export { getAnsw, getRand, getExpression, checkAnswer };