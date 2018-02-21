require('./dbConnection');
const mongoose = require('mongoose');
const { users, messages } = require('./seedData');

const User = mongoose.model('User');
const Message = mongoose.model('Message');

const client = require('../src/socketConnection');

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
