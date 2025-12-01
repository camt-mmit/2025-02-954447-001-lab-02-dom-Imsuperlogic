import readline from 'node:readline';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

rl.question('Input size: ', (inputSize) => {
  const size = Number(inputSize.trim());
  const center = size - 1; 

  
  for (let i = 0; i < size; i++) {
   
    const distance = center - i;
    
    const leadingSpaces = ' '.repeat(distance);
    
    const innerSpaceCount = i * 2 - 1; 
    
    let line = leadingSpaces + '*';

    if (innerSpaceCount > 0) {
      line += ' '.repeat(innerSpaceCount) + '*';
    }
    
    console.log(line);
  }

  for (let i = size - 2; i >= 0; i--) {
    const distance = center - i;
    
    const leadingSpaces = ' '.repeat(distance);
    
    const innerSpaceCount = i * 2 - 1; 

    let line = leadingSpaces + '*';

    if (innerSpaceCount > 0) {
      line += ' '.repeat(innerSpaceCount) + '*';
    }
    
    console.log(line);
  }
  
  rl.close();
});