const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const routes = require('./routes');

app.use(express.static(path.join(__dirname, '../dist')));

io.on('connection', routes);

module.exports = {
  server,
  io,
};
