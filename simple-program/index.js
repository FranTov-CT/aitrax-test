const names = require('../names');
const { greet } = require('./greeting');

for (const name of names) {
    console.log(greet(name));
}
