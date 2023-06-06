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

const getGcd = (x, y) => {
	if (y > x) return getGcd(y, x);
	if (!y) return x;
	return getGcd(y, x % y);
}

export { getRand, getOperation, getGcd };