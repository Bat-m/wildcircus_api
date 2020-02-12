const express = require('express');
const connection = require('../../config');
var router = express.Router();

router.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users ORDER BY convert(`score`, decimal) DESC',
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

module.exports = router;
