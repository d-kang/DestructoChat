const mongoose = require('mongoose');

const Message = mongoose.model('Message');
const { signup, login } = require('../controllers/user.controller');
const {
  addMessage,
  loadMessages,
  updateMessages,
  deleteMessage,
} = require('../controllers/message.controller');

module.exports = io => {
  io.on('connection', socket => {
    Message.find({}, (err, data) => {
      if (err) {
        console.error('error', err);
      }
    })
      .then(res => {
        res.forEach(({ selfDestruct, destructAt, messageId }) => {
          if (selfDestruct === true) {
            const timeTillDestruct = destructAt - Date.now();
            setTimeout(
              () => deleteMessage({ messageId }, socket),
              timeTillDestruct
            );
          }
        });

        return res;
      })
      .then(res => updateMessages(null, res, socket))
      .catch(e => console.error('e', e));
  });

  io.on('connection', socket => {
    socket.on('signup', data => signup(data, socket, io));

    socket.on('login', data => login(data, socket, io));

    socket.on('add message', data => addMessage(data, socket, io));

    socket.on('load messages', () => loadMessages(socket, io));

    socket.on('delete message', data => deleteMessage(data, socket, io));
  });
};
