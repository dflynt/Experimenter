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
        sql = dbService.parseUpdateParameters(queries.updateUserSQL, userFields);
        dbService.executeDatabaseQuery(sql, [userId], res);
    },

    deleteUser: function(userId, res) {
        dbService.executeDatabaseQuery(queries.deleteUserSQL, [userId], res);
    }
}