const mongoose = require('mongoose');
const { signup, login } = require('../controllers/userController');
const {
  addMessage,
  loadMessages,
  deleteMessage,
} = require('../controllers/messageController');

module.exports = socket => {
  socket.on('signup', data => signup(data, socket));

  socket.on('login', data => login(data, socket));

  socket.on('add message', data => addMessage(data, socket));

  socket.on('load messages', () => loadMessages(socket));

  socket.on('delete message', data => deleteMessage(data, socket));
};
