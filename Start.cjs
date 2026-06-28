const { spawn } = require('child_process');

console.log("Starting Last Caretaker Map via npm...");

const env = Object.assign({}, process.env, { BROWSER: 'none' });

const app = spawn('npm', ['run', 'preview', '--', '--host', '--port', '3000'], {
    stdio: 'inherit',
    env: env
});

app.on('close', (code) => {
    console.log(`Server stopped with code ${code}`);
    process.exit(code || 0);
});

process.on('SIGTERM', () => {
    console.log("Received stop signal (SIGTERM) from AMP. Shutting down the server safely...");
    app.kill('SIGTERM');
});

process.on('SIGINT', () => {
    console.log("Received stop signal (SIGINT). Shutting down the server safely...");
    app.kill('SIGINT');
});