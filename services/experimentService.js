const queries = require('../repositories/experimentRepository');
const dbService = require('../services/DataBaseService');
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Applesauce11!',
    database: 'experimenterdb'
});

connection.connect();
module.exports = {
    createExperiment: function(experimentFields, res) {
        let params = [];
        for(let field in experimentFields) {
            params.push(experimentFields[field]);
        }

        dbService.executeDatabaseQuery(queries.createExperimentSQL, params, res);
    },

    selectExperiment: function(experimentId, res) {
        dbService.executeDatabaseQuery(queries.selectExperimentSQL, [experimentId], res);
    },

    deleteExperiment: function(experimentId, res) {
        dbService.executeDatabaseQuery(queries.deleteExperimentSQL, [experimentId], res);
    },

    updateExperiment: function(experimentId, experimentFields, res) {
        let sql = queries.updateExperimentSQL;
        let fieldsToSet = "";
        for(let field in experimentFields) {
            fieldsToSet += field + "=" + experimentFields[field] + ", ";
        }
        fieldsToSet = fieldsToSet.substring(0, fieldsToSet.length - 2);
        sql = sql.replace("<replace>", fieldsToSet + " ");
        
        dbService.executeDatabaseQuery(sql, [experimentId], res);
    },

    selectAllExperiments: function(userId, res) {
        dbService.executeDatabaseQuery(queries.selectAllExperimentsSQL, [userId], res);
    },

    deleteAllExperiments: function(userId, res) {
        dbService.executeDatabaseQuery(queries.deleteAllExperimentsSQL, [userId], res);
    }
}