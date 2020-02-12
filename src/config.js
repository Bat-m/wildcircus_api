const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.HOST_FOOTCONNECT,
  user: process.env.USER_FOOTCONNECT,
  password: process.env.PWD_FOOTCONNECT,
  database: process.env.DB_FOOTCONNECT
});
module.exports = connection;
