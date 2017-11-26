const { join } = require('path');
const express = require('express');
const history = require('express-history-api-fallback');

const app = express();
const root = join(__dirname, '../build');

app.use(express.static(root));
app.use(history('index.html', { root }));

app.listen(process.env.PORT || 3000);

module.exports = app;
