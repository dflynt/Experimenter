const queries = require('../repositories/experimentRepository');
const dbService = require('../services/DataBaseService');

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
        sql = dbService.parseUpdateParameters(queries.updateExperimentSQL, experimentFields);
        dbService.executeDatabaseQuery(sql, [experimentId], res);
    },

    selectAllExperiments: function(userId, res) {
        dbService.executeDatabaseQuery(queries.selectAllExperimentsSQL, [userId], res);
    },

    deleteAllExperiments: function(userId, res) {
        dbService.executeDatabaseQuery(queries.deleteAllExperimentsSQL, [userId], res);
    }
}