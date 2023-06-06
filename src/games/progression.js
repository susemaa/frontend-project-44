import { createProgression } from "../math.js";
import { getAnsw, checkAnswer } from "../games-functions.js";

const playProgression = () => {
    console.log('What number is missing in the progression?');
    let counter = 0;

            while (counter < 3 && counter !== -1) {
                const [progression, corrAnsw] = createProgression();
                process.stdout.write("Question: ");
                console.log(...progression)
        
                const playerAnsw = getAnsw();
        
                counter = checkAnswer(counter, playerAnsw, corrAnsw);
            }

    return counter;
};

export { playProgression };