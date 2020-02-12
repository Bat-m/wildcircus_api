const express = require('express');
const login = require('./routes/login');
const ranking = require('./routes/ranking');
const score = require('./routes/score');

const router = express.Router();

router.use('/login', login);
router.use('/ranking', ranking);
router.use('/score', score);

module.exports = router;
