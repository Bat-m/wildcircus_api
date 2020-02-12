const express = require('express');
const connection = require('../../config');
var router = express.Router();

router.put('/:id', (req, res) => {
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

module.exports = router;
