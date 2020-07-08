const connection = require('./config/mariaDBConn.js')

var user = null;
connection.query('select name from test_table', function(err, rows) {
    if(err) throw err;
    if(rows[0])
        user = rows[0]
});


module.exports = user;