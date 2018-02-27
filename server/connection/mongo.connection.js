const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'variables.env' });
}

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', error => {
  console.error('mongoose connection error', error);
});

autoIncrement.initialize(db);

module.exports = db;
