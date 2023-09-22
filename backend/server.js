const WebSocket = require('ws');
const http = require('http');




const server = http.createServer((req, res) => {


    
  // Handle HTTP requests (if needed)
});

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);

    // Send a response message
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', () => {
    console.log('WebSocket client disconnected');
  });
});

server.listen(3000, () => {
  console.log('WebSocket server is listening on port 3000');
});
