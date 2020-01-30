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
  connection.query(
    'SELECT * FROM users ORDER BY score DESC',
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send('Impossible de recupérer les users');
      } else {
        res.json(results);
      }
    }
  );
});

app.post('/login', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO users SET ? ', formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Impossible de se logger');
    } else {
      res.json(results);
    }
  });
});

app.put('/score/:id', (req, res) => {
  const { id } = req.params;
  const { score } = req.body;
  console.log(id);
  connection.query(
    'UPDATE users SET score=? WHERE id_user=?',
    [score, id],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("Impossible d'enregistres les scores");
      } else {
        res.json(results);
      }
    }
  );
});

app.get('/ranking', (req, res) => {
  connection.query('SELECT * FROM ranking ', (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Impossible de charger les classements');
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
