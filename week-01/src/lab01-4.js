import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.question('Input size: ', (inputSize) => {
  const size = Number(inputSize.trim());
 
  for (let j = 0; j < size; j++) {
    let line = '';
 
    for (let i = 0; i < size; i++) {

      
      if (j === 0 || j === size - 1 || i === 0 || i === size - 1) {
        line += '*';
      } 

      else {
        line += ' '; 
      }
    }
    
    console.log(line);
  }
  
  rl.close();
});