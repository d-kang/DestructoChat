const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = (module.exports = http.createServer(app));
const io = socketIO(server);

app.use(express.static(path.join(__dirname, '../dist')));

io.on('connection', client => {
  client.on('subscribeToTimer', interval => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});
