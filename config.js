let URL = JSON.stringify('http://localhost:8000');
if (process.env.NODE_ENV === 'production') {
  URL = JSON.stringify('https://destructochat.herokuapp.com/');
}

module.exports = {
  URL,
};
