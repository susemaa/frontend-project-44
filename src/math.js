const getRand = (maxValue = 100) => Math.floor(Math.random() * maxValue); // < maxValue

const getOperation = () => {
  const operationNum = getRand(3);

  if (operationNum === 0) {
    return '+';
  }
  if (operationNum === 1) {
    return '-';
  }
  if (operationNum === 2) {
    return '*';
  }

  return '';
};

const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};

const createProgression = () => {
  const progression = [];
  progression[0] = String(getRand(10));
  const progressionStep = getRand(10);

  for (let i = 1; i < 10; i += 1) {
    progression.push(String(Number(progression[i - 1]) + progressionStep));
  }

  const missedId = getRand(10);
  const missedValue = progression[missedId];
  progression[missedId] = '..';

  return [progression, missedValue];
};

const isPrime = (value) => {
  for (let i = 2, s = Math.sqrt(value); i <= s; i += 1) {
    if (value % i === 0) return false;
  }

  return value > 1;
};

export {
  getRand,
  getOperation,
  getGcd,
  createProgression,
  isPrime,
};
