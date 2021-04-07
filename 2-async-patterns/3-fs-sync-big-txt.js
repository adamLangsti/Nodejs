// Create big txt with writeFile
const { writeFileSync } = require('fs');

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt', `${i} Hello world`, { flag: 'a' });
}

// Create big txt with readStream
const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf-8',
});

stream.on('data', (response) => {
    console.log(response);
});

stream.on('error', (error) => {
    console.log(error);
});

// Create big txt on server with fileStream

const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8');
    // response.end(text);
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', () => {
        fileStream.pipe(response);
    });
    fileStream.on('error', (error) => {
        response.end(error);
    });
}).listen(5000);
