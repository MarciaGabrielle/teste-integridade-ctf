const { exec } = require('child_process');
exec('cat /etc/passwd', (err, stdout, stderr) => {
    console.log(stdout);
});
