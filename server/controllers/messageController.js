const mongoose = require('mongoose');

const Message = mongoose.model('Message');

const destroyMessage = (_id, socket) => {
  Message.find({ _id }).remove((err, data) =>
    exports.updateMessages(err, data, socket)
  );
};

exports.addMessage = (message, socket) => {
  Message.create(message, (err, data) => {
    if (err) {
      console.error('err2', err);
    } else if (data.selfDestruct === true) {
      const timeTillDestruct = data.destructAt - Date.now();
      setTimeout(() => destroyMessage(data._id, socket), timeTillDestruct);
    }
  });
};

exports.loadMessages = socket => {
  console.log('loadMessages ran');
  Message.find({}, (err, data) => {
    if (err) {
      console.error('err', err);
    }
  })
    .sort({ createdAt: 1 })
    .then(data => {
      if (data.length !== 0) {
        socket.emit('load messages', data);
      } else {
        socket.emit('load messages', {
          error: { errorMessage: 'Sorry No Messages.' },
        });
      }
    });
};

exports.updateMessages = (error, d, socket) => {
  if (error) {
    console.error('updateMessages error', error);
  } else {
    Message.find({}, err => {
      if (err) {
        console.error('error', err);
      }
    })
      .sort({ createdAt: 1 })
      .then(data => {
        console.log('data', data);
        if (data.length !== 0) {
          socket.broadcast.emit('load messages', data);
        } else {
          socket.emit('load messages', {
            error: { errorMessage: 'Sorry No Messages.' },
          });
        }
      });
  }
};
