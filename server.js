const express = require('express');
const app = express();

// Create an HTTP server
const server = require('http').createServer(app);

// Create a WebSocket server
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server });

// WebSocket connection event
wss.on('connection', (ws) => {
  // WebSocket connection established

  // WebSocket message event
  ws.on('message', (message) => {
    // Handle incoming message
    console.log('Received message:', message);

    // Send a response
    ws.send('Response from server: ' + message);
  });
});

// Express route
app.get('/', (req, res) => {
  res.send('Serverless function with WebSocket support');
});

// Create a Vercel serverless function
module.exports = app;
module.exports.server = server;
