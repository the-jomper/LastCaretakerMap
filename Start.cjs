const { spawn } = require('child_process');

const env = Object.assign({}, process.env, { BROWSER: 'none' });
console.log("Starting Last Caretaker Map...");

const app = spawn('npm', ['run', 'preview', '--', '--host', '--port', '3000'], {
    stdio: 'inherit',
    env: env
});

app.on('close', (code) => {
    console.log(`Server stopped with code ${code}`);
    process.exit(code || 0);
});

const stopServer = () => {
    console.log("Shutting down the server process tree...");
    try {
        process.kill(-app.pid, 'SIGTERM');
    } catch (e) {
        app.kill('SIGTERM');
    }
};

process.on('SIGTERM', stopServer);
process.on('SIGINT', stopServer);
