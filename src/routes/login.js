const express = require('express');
const connection = require('../../config');
var router = express.Router();

router.post('/', (req, res) => {
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

module.exports = router;
