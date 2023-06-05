import readlineSync from 'readline-sync';

const getAnsw = () => { 
    const answ = readlineSync.question('Your answer: ');

    return answ;
}

//random value up to 100
const getRand = () => Math.round(Math.random() * 100);

export { getAnsw, getRand };