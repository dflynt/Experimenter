const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const service = require('../services/licenseService');

const logger = function(req, res, next) {
    console.log("Receiving request to: " + req.path);
    next();
}

router.use(logger);

router.get('/generateLicense/:instructorId', (req, res) => {
    service.generateLicense(req.params.instructorId, res);
})

router.route('/license/:licenseId')
    .get((req, res) => {
        service.selectLicense(req.params.licenseId, res);
    })
    .put(bodyParser, (req, res) => {
        service.updateLicense(req.params.licenseId, req.body.license.updates, res)
    })
    .delete((req, res) => {
        service.deleteLicense(req.params.licenseId, res);
    })

module.exports = router;