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
    },

    parseUpdateParameters: function(baseQuery, params) {
        let sql = baseQuery;
        let fieldsToSet = "";
        for(let field in params) {
            fieldsToSet += field + "=" + params[field] + ", ";
        }
        fieldsToSet = fieldsToSet.substring(0, fieldsToSet.length - 2);
        sql = sql.replace("<replace>", fieldsToSet + " ");

        return sql;
    }
}