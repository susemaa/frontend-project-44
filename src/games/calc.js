import { getAnsw, checkAnswer } from "../games-functions.js";
import { getOperation, getRand } from "../math.js";

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

const playCalc = () => {
    let counter = 0;
    console.log('What is the result of the expression?');

        while (counter < 3 && counter !== -1) {
            const [questionStr, questionValue] = getExpression();
            console.log(`Question: ${questionStr}`);
            
            const corrAnsw = questionValue;
            const playerAnsw = Number(getAnsw());
            
            counter = checkAnswer(counter, playerAnsw, corrAnsw);
        }
    return counter;
};

export { playCalc };