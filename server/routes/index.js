const mongoose = require('mongoose');
const { signup, login } = require('../controllers/userController');
const {
  addMessage,
  loadMessages,
} = require('../controllers/messageController');

module.exports = socket => {
  socket.on('subscribeToTimer', interval => {
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval);
  });

  socket.on('signup', data => signup(data, socket));

  socket.on('login', data => login(data, socket));

  socket.on('add message', data => addMessage(data, socket));

  socket.on('load messages', data => loadMessages(data, socket));
};
