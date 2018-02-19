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
      console.log('selfDestruct True >> data >>', data.message);
      const timeTillDestruct = data.destructAt - Date.now();
      console.log('timeTillDestruct', timeTillDestruct);
      setTimeout(() => destroyMessage(data._id, socket), timeTillDestruct);
    }
  });
};

exports.loadMessages = (message, socket) => {
  console.log('loadMessages ran');
  Message.find({}, (err, data) => {
    if (err) {
      console.error('err3', err);
    }
  }).then(data => {
    if (data.length !== 0) {
      console.log('i ran', data);
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
    }).then(data => {
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
