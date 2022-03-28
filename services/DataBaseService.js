const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Applesauce11!',
    database: 'experimenterdb'
});

connection.connect();

module.exports = {
    executeDatabaseQuery: function(query, params, res) {
        connection.query(query, params, (error, results) => {
            if(error) {
                res.send(error)
            }
            console.log(results);
            res.send(results);
        })
    }
}