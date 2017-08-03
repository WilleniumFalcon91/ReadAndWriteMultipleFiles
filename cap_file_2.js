const fs = require('fs');
const readline = require('readline')

const rl = readline.createInterface( {
    input: process.stdin, 
    output: process.stdout
})

rl.question('filename: ', (input) =>  {
    rl.question('filename: ', (output) => {
        rl.close();
        fs.readFile(input, (err, buffer) => {
            if (err) {
                console.log(err.message);
                return;
            } 
            let content = buffer.toString();
            let upcase = content.toUpperCase();
            fs.writeFile(output, upcase, (err) => {
                console.log('It worked!');
            })
        })
    })
})