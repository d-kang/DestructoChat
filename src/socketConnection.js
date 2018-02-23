const io = require('socket.io-client');

const socket = io.connect(process.env.URL);

module.exports = socket;
