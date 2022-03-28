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
        sql = dbService.parseUpdateParameters(queries.updateLicenseSQL, licenseFields)
        dbService.executeDatabaseQuery(sql, [licenseId], res);
    },

    deleteLicense: function(licenseId, res) {
        dbService.executeDatabaseQuery(queries.deleteLicenseSQL, [licenseId], res);
    }
}