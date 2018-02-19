const mongoose = require('mongoose');

const Message = mongoose.model('Message');

exports.addMessage = (message, socket) => {
  Message.create(message);
};

exports.loadMessages = (message, socket) => {
  Message.find({}, (err, data) => {
    if (err) {
      console.error('err', err);
    }
  }).then(data => {
    if (data.length !== 0) {
      socket.emit('load messages', data);
    } else {
      socket.emit('load messages', {
        error: { errorMessage: 'Sorry No Messages.' },
      });
    }
  });
};
