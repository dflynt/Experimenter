const queries = require('../repositories/institutionRepository');
const dbService = require('./DataBaseService');

module.exports = {
    createInstitution: function(institutionFields, res) {
        let params = []
        for(let field in institutionFields) {
            params.push(institutionFields[field]);
        }
        
        dbService.executeDatabaseQuery(queries.createInstitutionSQL, params, res);
    },

    getInstitution: function(institutionId, res) {
        dbService.executeDatabaseQuery(queries.selectInstitutionSQL, [institutionId], res);
    },

    deleteInstitution: function(institutionId, res) {
        dbService.executeDatabaseQuery(queries.deleteInstitutionSQL, [institutionId], res);
    }
}