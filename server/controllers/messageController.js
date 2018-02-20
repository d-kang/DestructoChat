const mongoose = require('mongoose');

const Message = mongoose.model('Message');

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

const destroyMessage = (_id, socket) => {
  Message.find({ _id }).remove((err, data) =>
    exports.updateMessages(err, data, socket)
  );
};

exports.addMessage = (message, socket) => {
  const msg = new Message(message);
  msg
    .save()
    .then(res => {
      if (res.selfDestruct === true) {
        const timeTillDestruct = res.destructAt - Date.now();
        setTimeout(() => destroyMessage(res._id, socket), timeTillDestruct);
      }
      return res;
    })
    .then(res => exports.updateMessages(null, res, socket))
    .catch(e => console.error('e', e));
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
          socket.emit('load messages', data);
        } else {
          socket.broadcast.emit('load messages', {
            error: { errorMessage: 'Sorry No Messages.' },
          });
        }
      });
  }
};
