const dbService = require('./DataBaseService');
const queries = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

const saltRounds = 10;
module.exports = {
    createUser: async function(userFields, res) {
        let params = []
        for(let field in userFields) {
            if(field == 'password') {
                //need to use await here because we're looping over params and can't skip any
                let hashedPassword = await bcrypt.hash(userFields[field], saltRounds);
                userFields[field] = hashedPassword; 
            }
            params.push(userFields[field]);
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
    },

    attemptLogin: function(userId, userFields, res) {
        dbService.retrieveUserForLogin(queries.selectUserSQL, [userId], function(result) { //using inline callback
            bcrypt.compare(userFields['password'], result['password'], function(err, result) {                
                if(result) {
                    res.send("Login Successful");
                }
                else {
                    res.send("Incorrect Password");
                }
            }) 
        })
    }            
}