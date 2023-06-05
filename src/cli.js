import readlineSync from 'readline-sync';

const getName = () => {
    const userName = readlineSync.question('Your name is: ');

    return userName;
}

export { getName };