const { readFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (error, response) => {
    if (error) {
        return;
    } else {
        console.log(response);
    }
});
