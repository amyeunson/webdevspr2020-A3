const express = require('express');
const books = require('./books.js');
const path = require('path');
const app = express();
var cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/books', books);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('Starting server');
});