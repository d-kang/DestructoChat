const io = require('socket.io-client');

const socket = io.connect(process.env.URL);
console.log('process.env.URL', process.env.URL);
module.exports = socket;
