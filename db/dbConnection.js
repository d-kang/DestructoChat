const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

try {
  require('dotenv').config({ path: 'variables.env' });
} catch (e) {
  console.error('e', e);
}

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', error => {
  console.error('mongoose connection error', error);
});

autoIncrement.initialize(db);

require('../db/models/User');
require('../db/models/Message');

module.exports = db;
