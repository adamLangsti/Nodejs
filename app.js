const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('Welcome to our homepage');
    } else if (request.url === '/about') {
        response.end('Here is our short history');
    } else {
        response.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">Back Home<a/>
        `);
    }
});

server.listen(5000);
