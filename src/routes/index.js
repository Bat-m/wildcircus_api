const express = require('express');
const login = require('./login');
const ranking = require('./ranking');
const score = require('./score');

const router = express.Router();

router.use('/login', login);
router.use('/ranking', ranking);
router.use('/score', score);

module.exports = router;
