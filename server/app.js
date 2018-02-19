const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const mongoose = require('mongoose');

const app = express();
const server = (module.exports = http.createServer(app));
const io = socketIO(server);
const User = mongoose.model('User');
const Message = mongoose.model('Message');

app.use(express.static(path.join(__dirname, '../dist')));

io.on('connection', socket => {
  socket.on('subscribeToTimer', interval => {
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval);
  });

  socket.on('signup', username => {
    const user = new User({ username });
    socket.username = username;
    User.find({ username }, (err, data) => {
      if (err) {
        console.error('err', err);
      }
    }).then(data => {
      if (data.length === 0) {
        user
          .save()
          .then(d => {
            socket.emit('signup', d);
          })
          .catch(err => console('err', err));
      } else {
        socket.emit('signup', {
          username: null,
          error: 'Username Exists. Please choose another.',
        });
      }
    });
  });

  socket.on('login', username => {
    socket.username = username;
    User.find({ username }, (err, data) => {
      if (err) {
        console.error('err', err);
      }
    }).then(data => {
      if (data.length !== 0) {
        socket.emit('login', data[0]);
      } else {
        socket.emit('login', {
          username: null,
          error: 'No user by that name. Please Sign Up.',
        });
      }
    });
  });

  socket.on('add message', message => {
    Message.create(message);
  });

  socket.on('load messages', message => {
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
  });
});
