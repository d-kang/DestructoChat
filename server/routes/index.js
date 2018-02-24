const mongoose = require('mongoose');

const Message = mongoose.model('Message');
const { signup, login } = require('../controllers/userController');
const {
  addMessage,
  loadMessages,
  updateMessages,
  deleteMessage,
} = require('../controllers/messageController');

module.exports = socket => {
  Message.find({}, (err, data) => {
    if (err) {
      console.error('error', err);
    }
  })
    .then(res => {
      res.forEach(({ selfDestruct, destructAt, messageId }) => {
        if (selfDestruct === true) {
          console.log('selfDestruct is true');
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

  socket.on('signup', data => signup(data, socket));

  socket.on('login', data => login(data, socket));

  socket.on('add message', data => addMessage(data, socket));

  socket.on('load messages', () => loadMessages(socket));

  socket.on('delete message', data => deleteMessage(data, socket));
};
