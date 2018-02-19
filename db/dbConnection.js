const mongoose = require('mongoose');

try {
  require('dotenv').config({ path: 'variables.env' });
} catch (e) {
  console.error('e', e);
}

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', error => {
  console.error('mongoose connection error', error);
});

require('../db/models/User');
require('../db/models/Message');

module.exports = mongoose.connection;
