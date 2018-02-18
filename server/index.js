const server = require('./app');

const PORT = process.env.PORT || 4242;

console.log('PORT', PORT);
server.listen(PORT, () => {
  console.log(`listening on http:localhost:${PORT}`);
});
