const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const service = require('../services/institutionService');

const logger = function(req, res, next) {
    console.log('Receiving request to: ' + req.path);
    next();
}

router.use(logger);

router.route('/institution/:institutionId')
    .get((req, res) => {
        service.getInstitution(req.params.institutionId, res);
    })
    .post(bodyParser, (req, res) => {
        service.createInstitution(req.body.institution, res);
    })
    .delete((req, res) => {
        service.deleteInstitution(req.params.institutionId, res);
    })

module.exports = router;
