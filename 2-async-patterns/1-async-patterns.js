// SAME AS FILE 9 IN FOLDER 1 BUT WITH PROMISES TO AVOID CALLBACK HELL
const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile(
            './content/result-async-promise',
            `This is awesome: ${first} ${second}`,
            { flag: 'a' }
        );
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
};
start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (error, response) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(response);
//             }
//         });
//     });
// };
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error));
