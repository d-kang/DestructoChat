const express = require('express');
const cors = require('cors');
const path = require('path');

const app = (module.exports = express()); // eslint-disable-line no-multi-assign

app.set('port', process.env.PORT || 9090);
const PORT = app.get('port');
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
