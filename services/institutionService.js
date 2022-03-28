const mysql = require('mysql');
const queries = require('../repositories/institutionRepository');
const dbService = require('../services/DataBaseService');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Applesauce11!',
    database: 'experimenterdb'
});

connection.connect();

module.exports = {
    createInstitution: function(institutionFields, res) {
        let params = []
        for(let field in institutionFields) {
            params.push(institutionFields[field]);
        }
        let result = dbService.executeDatabaseQuery(queries.createInstitutionSQL, params);

        res.send(result);
    },

    getInstitution: function(institutionId, res) {
        let result = dbService.executeDatabaseQuery(queries.selectInstitutionSQL, [institutionId]);

        res.send(result);
    },

    deleteInstitution: function(institutionId, res) {
        let result = dbService.executeDatabaseQuery(queries.deleteInstitutionSQL, [institutionId]);
        
        res.send(result);
    }
}