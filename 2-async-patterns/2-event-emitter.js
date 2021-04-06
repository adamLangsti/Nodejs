const http = require('http');

// Using EventEmitter API
const server = http.createServer();
server.on('request', (request, response) => {
    response.end('Welcome');
});

server.listen(5000);

// Creating own EventEmitter
// const EventEmitter = require('events');
// const customEmitter = new EventEmitter();

// customEmitter.on('response', (name, id) => {
//     console.log(`Data recieved from ${name} with id: ${id}`);
// });

// customEmitter.emit('response', 'Adam', 30);
