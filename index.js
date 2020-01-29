const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connection = require('./config');

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  connection.query('SELECT * FROM user', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Impossible de charger les compositions');
    } else {
      res.json(results);
    }
  });
});

app.post('/login', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO user SET ? ', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Impossible de charger les compositions');
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, err => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${PORT}`);
});
