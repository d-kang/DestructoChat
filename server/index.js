require('../db/dbConnection');
const server = require('./app');

const PORT = process.env.PORT || 8000;

console.log('PORT', PORT);
server.listen(PORT, () => {
  console.log(`listening on http:localhost:${PORT}`);
});
