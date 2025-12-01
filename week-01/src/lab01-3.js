import readline from 'node:readline';
import { stdin, stdout} from 'node:process';

const rl = readline.createInterface({
    input:stdin, 
    output:stdout});

    rl.question('Input size: ', (inputSize) => {
        const size = Number(inputSize.trim());
       
        for (let j = 1; j <= size; j++) {
            const spaces = ' '.repeat(size - j);
            
            const stars = '*'.repeat(j);

            let line = spaces + stars;
            console.log(line);
        }
    
        rl.close();
    });