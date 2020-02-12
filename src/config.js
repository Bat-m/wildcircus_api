const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.HOST_WILDCIRCUS,
  user: process.env.USER_WILDCIRCUS,
  password: process.env.PWD_WILDCIRCUS,
  database: process.env.DB_WILDCIRCUS
});
module.exports = connection;
