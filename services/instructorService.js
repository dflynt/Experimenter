const queries = require('../repositories/instructorRepository');
const dbService = require('../services/DataBaseService');

module.exports = {
    createInstructor: function(instructorFields, res) {
        let params = []
        for(let field in instructorFields) {
            params.push(instructorFields[field]);
        }

        dbService.executeDatabaseQuery(queries.createInstructorSQL, params, res);
    },

    selectInstructor: function(instructorId, res) {
        dbService.executeDatabaseQuery(queries.selectInstructorSQL, [instructorId], res);
    },

    updateInstructor: function(instructorId, instructorFields, res) {
        sql = dbService.parseUpdateParameters(queries.updateInstructorSQL, instructorFields);
        dbService.executeDatabaseQuery(sql, [instructorId], res);
    },
    
    deleteInstructor: function(instructorId, res) {
        dbService.executeDatabaseQuery(queries.deleteInstructorSQL, [instructorId], res);
    },
}