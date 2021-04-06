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


// SAME BUT BLOCKING CODE
// const http = require('http');

// const server = http.createServer((request, response) => {
//     if (request.url === '/') {
//         response.end('Home Page');
//     } else if (request.url === '/about') {
//         // BLOCKING CODE
//         for (let i = 0; i < 1000; i++) {
//             for (let j = 0; j < 1000; j++) {
//                 console.log(`${i} ${j}`);
//             }
//         }
//         response.end('Welcome to the about page');
//     } else {
//         response.end(`<h1>Oops! Something went wrong!</h1>
//         <p>We're sorry but the page you're looking for doesn't exist.</p>
//         <a href="/">Back home</a>
//         `);
//     }
// });

// server.listen(5000, () => {
//     console.log('Listening on port: 5000');
// });
