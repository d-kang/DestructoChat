const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

mongoose.Promise = global.Promise;

const messageSchema = new mongoose.Schema(
  {
    messageId: {
      type: Number,
      required: true,
    },
    author: {
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
  },
  { timestamps: true }
);

messageSchema.plugin(autoIncrement.plugin, {
  model: 'Message',
  field: 'messageId',
});

module.exports = mongoose.model('Message', messageSchema);
