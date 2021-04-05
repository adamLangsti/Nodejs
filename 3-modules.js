const sayHi = (name) => {
    console.log(`Hello ${name}`);
};

module.exports = sayHi;


const { john, peter } = require('./2-globals');
const myFunc = require('./3-modules');
const data = require('./4-alternative-flavor');
require('./5-function');

myFunc(john);
myFunc(peter);
myFunc('Adam');
