const autoIncrement = require('mongoose-auto-increment');

module.exports = mongoose => {
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

  return mongoose.model('Message', messageSchema);
};
