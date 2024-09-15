const fs = require('fs');
const flag = fs.readFileSync('./public/flag.txt', 'utf8');
console.log(flag);
