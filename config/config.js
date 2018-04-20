const mysql = require('mysql');
var config = require('./config.json');
connection = mysql.createConnection({
  host: config.dbConfig.host,
  user: config.dbConfig.user,
  password: config.dbConfig.password,
  database: config.dbConfig.dbName
});

module.exports = connection;