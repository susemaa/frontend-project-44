import { getAnsw, checkAnswer } from './in-games-functions.js';
import { getOperation, getRand } from '../math.js';

const getExpression = () => {
  const [v1, v2] = [getRand(15), getRand(15)];
  const operation = getOperation();

  switch (operation) {
    case '+':
      return [v1, v2, operation, v1 + v2];
    case '-':
      return [v1, v2, operation, v1 - v2];
    case '*':
      return [v1, v2, operation, v1 * v2];
    default:
      return [0, 0, '', 0];
  }
};

const playCalc = () => {
  let counter = 0;
  console.log('What is the result of the expression?');

  while (counter < 3 && counter !== -1) {
    const [v1, v2, operation, questionValue] = getExpression();
    console.log('Question:', v1, operation, v2);

    const corrAnsw = questionValue;
    const playerAnsw = Number(getAnsw());

    counter = checkAnswer(counter, playerAnsw, corrAnsw);
  }
  return counter;
};

export default playCalc;
