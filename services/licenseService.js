const queries = require('../repositories/liceseRepository');
const dbService = require('./DataBaseService');

module.exports = {
    generateLicense: function(instructorId, res) {
        dbService.executeDatabaseQuery(queries.generateLicenseSQL, [instructorId], res);
    },

    selectLicense: function(licenseId, res) {
        dbService.executeDatabaseQuery(queries.selectLicenseSQL, [licenseId], res);
    },

    updateLicense: function(licenseId, licenseFields, res) {
        let sql = queries.updateLicenseSQL;
        let fieldsToSet = "";
        for(let field in licenseFields) {
            fieldsToSet += field + "=" + licenseFields[field] + ", ";
        }
        fieldsToSet = fieldsToSet.substring(0, fieldsToSet.length - 2);
        sql = sql.replace("<replace>", fieldsToSet + " ");

        dbService.executeDatabaseQuery(sql, [licenseId], res);
    },

    deleteLicense: function(licenseId, res) {
        dbService.executeDatabaseQuery(queries.deleteLicenseSQL, [licenseId], res);
    }
}