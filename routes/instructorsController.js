const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const service = require('../services/instructorService');
const licenseService = require('../services/licenseService');

const logRequest = function(req, res, next) {
    console.log("Received request to: " + req.path);
    next();
}

router.use(logRequest);

router.route('/instructor/:instructorId')
    .get((req, res) => {
        service.selectInstructor(req.params.instructorId, res);
    })
    .post(bodyParser, (req, res) => {
        service.createInstructor(req.body.instructor, res);
    })
    .put(bodyParser, (req, res) => {
        service.updateInstructor(req.params.instructorId, req.body.instructor.updates, res);
    })
    .delete((req, res) => {
        service.deleteInstructor(req.params.instructorId, res);
    })

router.get('/generateLicense/:instructorId', (req, res) => {
        licenseService.generateLicense(req.params.instructorId.updates, res);
})

module.exports = router