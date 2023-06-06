const getRand = (maxValue = 100) => {
    return Math.floor(Math.random() * maxValue); // < maxValue
};

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

const getGcd = (x, y) => {
	if (y > x) return getGcd(y, x);
	if (!y) return x;
	return getGcd(y, x % y);
};

const createProgression = () => {
    const progression = [];
    progression[0] = String(getRand(10));
    const progressionStep = getRand(10);

    for (let i = 1; i < 10; i++) {
        progression.push(String(Number(progression[i - 1]) + progressionStep))
    }

    const missedId = getRand(10);
    const missedValue = progression[missedId];
    progression[missedId] = '..';

    return [progression, missedValue];
};

const isPrime = (value) => {
    for(let i = 2, s = Math.sqrt(value); i <= s; i++) {
        if(value % i === 0) return false;
    }
    
    return value > 1;
}

export { getRand, getOperation, getGcd, createProgression, isPrime };