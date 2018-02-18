const http = require('http');
const path = require('path');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = (module.exports = http.createServer(app));
const io = socketIo(server);

app.use(express.static(path.join(__dirname, '../dist')));
