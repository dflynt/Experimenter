const mysql = require('mysql');
const queries = require('../repositories/instructorRepository');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Applesauce11!',
    database: 'experimenterdb'
});

connection.connect();

module.exports = {
    createInstructor: function(instructorFields, res) {
        let params = []
        for(let field in instructorFields) {
            params.push(instructorFields[field]);
        }
        connection.query(queries.createInstructorSQL, params, (error, results, fields) => {
            if(error) {
                res.send(error);
            }

            res.send(results);
        })
    },

    getInstructor: function(instructorId, res) {
        connection.query(queries.selectInstructorSQL, [instructorId], (error, results) => {
            if(error) {
                res.send(error);
            }
            
            res.send(results);
        })
    },

    deleteInstructor: function(instructorId, res) {
        connection.query(queries.deleteInstructorSQL, [instructorId], (error, results) => {
            if(error) {
                res.send(error);
            }
            
            res.send(results);
        })
    },

    updateInstructor: function(instructorId, instructorFields, res) {
        let sql = queries.updateInstructorSQL;
        let fieldsToSet = "";
        for(let field in instructorFields) {
            fieldsToSet += field + "=" + instructorFields[field] + ", ";
        }
        fieldsToSet = fieldsToSet.substring(0, fieldsToSet.length - 2);
        sql = sql.replace("<replace>", fieldsToSet + " ");

        connection.query(sql, [instructorId], (error, results) => {
            if(error) {
                res.send(error);
            }

            res.send(results);
        })
    }
}