const express = require('express');
const app = express();
const connection = require('./config');
const PORT = process.env.PORT || 5000;
const api = require('./routes');

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/api', api);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${PORT}.`);
});
