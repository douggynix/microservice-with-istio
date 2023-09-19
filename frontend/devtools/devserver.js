const { exec } = require("child_process");
const proxy = require('./proxy')

proxy.runProxyServer()

exec("npx react-scripts start", (error, stdout, stderr) => {
     if (error) {
         console.log(`error: ${error.message}`);
         return;
     }
     if (stderr) {
         console.log(`stderr: ${stderr}`);
         return;
     }
     console.log(`stdout: ${stdout}`);
 });