const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const messageSchema = new mongoose.Schema({
  username: String,
  message: String,
});

module.exports = mongoose.model('Message', messageSchema);
