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

require('./models/User');
require('./models/Message');

const server = require('./app');

const PORT = process.env.PORT || 8000;

console.log('PORT', PORT);
server.listen(PORT, () => {
  console.log(`listening on http:localhost:${PORT}`);
});
