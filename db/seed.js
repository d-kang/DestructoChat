require('./dbConnection');
const mongoose = require('mongoose');
const { users, messages } = require('./seedData');

const User = mongoose.model('User');
const Message = mongoose.model('Message');

const io = require('socket.io-client');

const client = io.connect('https://destructochat.herokuapp.com/');

User.remove({}, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('User Collection Cleared');
    users.forEach(user => {
      client.emit('signup', user.username);
    });
  }
});

Message.remove({}, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Message Collection Cleared');
    messages.forEach(message => {
      client.emit('add message', message);
    });
  }
});
