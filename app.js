const express = require('express');
const app = express();

//request => middleware => response
const middleware = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
};

app.get('/', middleware, (req, res) => {
    res.send('Home Page');
});
app.get('/about', middleware, (req, res) => {
    res.send('About Page');
});

app.listen(5000, () => {
    console.log('Listening on port 5000');
});
