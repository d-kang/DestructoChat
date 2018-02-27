module.exports = mongoose => {
  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      trim: true,
      required: 'Please enter username.',
    },
  });

  return mongoose.model('User', userSchema);
};
