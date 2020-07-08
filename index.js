const connection = require('./config/mariaDBConn.js')
const express = require('express')
const app = express()
const port = 5000

connection.connect();

var user = connection.query('select name from test_table', function(err, rows) {
    if(err) throw err;
    if(rows[0])
        user = rows[0]
}); 

app.get('/', (req, res) => res.send('Hello World!~~ 안녕하세요' + user.name + "님"))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))