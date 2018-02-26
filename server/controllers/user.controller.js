const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.signup = (username, socket) => {
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
        .catch(err => console.error('err>>', err));
    } else {
      socket.emit('signup', {
        username: null,
        error: 'Username Exists. Please choose another.',
      });
    }
  });
};

exports.login = (username, socket) => {
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
};
