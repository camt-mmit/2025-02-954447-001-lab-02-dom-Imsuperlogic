import {argv} from 'node:process';
const n = parseInt(argv[2]);

for (let j = 1; j <= 12; j++) {
    let line = '';
    for (let i = 2; i <=n; i++){
        line += `${i*j}` .padStart(5);
    }
    console.log(line);
}