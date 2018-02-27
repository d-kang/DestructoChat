const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
require('./connection/mongo.connection');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, '../dist')));

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

require('./routes/main.route')(io);
