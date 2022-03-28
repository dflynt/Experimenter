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

    deleteInstructor: function(instructorId, res) {
        dbService.executeDatabaseQuery(queries.deleteInstructorSQL, [instructorId], res);
    },

    updateInstructor: function(instructorFields, instructorFields, res) {
        let sql = queries.updateInstructorSQL;
        let fieldsToSet = "";
        for(let field in instructorFields) {
            fieldsToSet += field + "=" + instructorFields[field] + ", ";
        }
        fieldsToSet = fieldsToSet.substring(0, fieldsToSet.length - 2);
        sql = sql.replace("<replace>", fieldsToSet + " ");

        dbService.executeDatabaseQuery(sql, [instructorFields], res);
    }
}