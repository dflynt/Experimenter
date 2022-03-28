const dbService = require('./DataBaseService');
const queries = require('../repositories/userRepository');

module.exports = {
    createUser: function(userfields, res) {
        let params = []
        for(let field in userfields) {
            params.push(userfields[field]);
        }
        
        dbService.executeDatabaseQuery(queries.createUserSQL, params, res);
    },

    selectUser: function(userId, res) {
        dbService.executeDatabaseQuery(queries.selectUserSQL, [userId], res);
    },

    updateUser: function(userId, userFields, res) {
        let sql = queries.updateUserSQL;
        let fieldsToSet = "";
        for(let field in userFields) {
            fieldsToSet += field + "=" + userFields[field] + ", ";
        }
        fieldsToSet = fieldsToSet.substring(0, fieldsToSet.length - 2);
        console.log(fieldsToSet);
        sql = sql.replace("<replace>", fieldsToSet + " ");

        dbService.executeDatabaseQuery(sql, [userId], res);
    },

    deleteUser: function(userId, res) {
        dbService.executeDatabaseQuery(queries.deleteUserSQL, [userId], res);
    }
}