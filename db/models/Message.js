const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const messageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  selfDestruct: {
    type: Boolean,
    required: true,
    default: false,
  },
  destructAt: Number,
  totalMs: Number,
  hasExpired: Boolean,
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', messageSchema);
