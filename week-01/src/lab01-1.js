import readline from 'node:readline';
import { stdin, stdout} from 'node:process';

const rl = readline.createInterface({
    input:stdin, 
    output:stdout});

rl.question('Input score: ', (inputScore) => {
    const score = Number(inputScore.trim());
    let grade ="";
    switch (true) {
        case (score >= 80):
            grade="A";
            break;
        case (score >= 70):
            grade="B";
            break;
        case (score >= 60):
            grade="C";
            break;
        case (score >= 50):
                grade="D";
                break;
        default:
            grade="F"; 
                     
    }
    rl.write(`Your grade is ${grade}\n`);
    rl.close();

}

)