const fs = require('fs');
const possiblePaths = [
    './flag.txt',
    './public/flag.txt',
    '/flag.txt',
    '/app/flag.txt',
    '/app/public/flag.txt'
];

for (let path of possiblePaths) {
    try {
        if (fs.existsSync(path)) {
            const flag = fs.readFileSync(path, 'utf8');
            console.log(`Flag found at ${path}: ${flag}`);
            break;
        }
    } catch (err) {
        console.log(`Could not read file at ${path}: ${err}`);
    }
}
