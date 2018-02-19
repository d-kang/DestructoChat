const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: 'Please enter username.',
  },
});

module.exports = mongoose.model('User', userSchema);
