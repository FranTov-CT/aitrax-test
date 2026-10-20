const { randomBytes } = require('node:crypto');

for (let line = 0; line < 10; line += 1) {
  console.log(randomBytes(16).toString('hex'));
}
