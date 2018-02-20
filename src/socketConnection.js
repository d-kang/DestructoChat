const io = require('socket.io-client');

const socket = io.connect('https://destructochat.herokuapp.com/');

module.exports = socket;
