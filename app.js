console.log("Hello, World");



// app.js
const http = require('http');

// Skapa en HTTP-server
const server = http.createServer((req, res) => {
    // Skicka tillbaka en HTML-sida baserat på om JavaScript är aktiverat eller inte
    if (req.headers['user-agent'].includes('Node.js')) {
        // Om användaren använder en Node.js-miljö (där JavaScript körs), visa "JavaScript aktiverat"
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<!DOCTYPE html><html><head><title>JavaScript Status</title></head><body><p>JavaScript aktiverat</p></body></html>');
    } else {
        // Annars, om JavaScript inte körs (till exempel om det är avaktiverat i webbläsaren), visa innehållet inuti <noscript>-taggen
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<!DOCTYPE html><html><head><title>JavaScript Status</title></head><body><noscript>JavaScript avaktiverat</noscript></body></html>');
    }
});

// Lyssna på en specifik port
server.listen(2333, () => {
    console.log('Servern lyssnar på port 2333');
});
