const { signup, login } = require('../controllers/user.controller');
const {
  addMessage,
  loadMessages,
  updateMessages,
  deleteMessage,
  initializeDestructTimeouts,
} = require('../controllers/message.controller');

module.exports = io => {
  io.on('connection', socket => {
    initializeDestructTimeouts(socket);
    socket.on('signup', data => signup(data, socket, io));
    socket.on('login', data => login(data, socket, io));
    socket.on('add message', data => addMessage(data, socket, io));
    socket.on('load messages', () => loadMessages(socket, io));
    socket.on('delete message', data => deleteMessage(data, socket, io));
  });
};
