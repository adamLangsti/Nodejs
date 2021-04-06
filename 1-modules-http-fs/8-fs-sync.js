const { readFileSync, writeFileSync } = require('fs');
console.log('start');

// readFileSync 2 params, path and encoding
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first);
console.log(second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
);
console.log('done with this task');
console.log('starting the next one');
