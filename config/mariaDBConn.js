const mysql = require('mysql');
 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'zmflwps7733',
    database: 'test',
    connectionLimit: 5
});

module.exports = connection;