const express = require('express');
const router = express.Router();
//need this body parser to comb through the Body text
const bodyParser = require('body-parser').json();
const service = require('../services/experimentService');

const logRequest = function(req, res, next) {
    console.log("Received request to: " + req.path);
    next();
}

router.use(logRequest);

router.route('/experiment/:experimentId')
    .get((req, res) => {
        service.selectExperiment(req.params.experimentId, res);
    })
    .post(bodyParser, (req, res) => {
        service.createExperiment(req.body.experiment, res);
    })
    .put(bodyParser, (req, res) => {
        service.updateExperiment(req.params.experimentId, req.body.experiment.updates, res);
    })
    .delete((req, res) => {
        service.deleteExperiment(req.params.experimentId, res);
    })

router.route('/allExperiments/:userId')
    .get((req, res) => {
        service.selectAllExperiments(req.params.userId, res);
    })
    .delete((req, res) => {
        service.deleteAllExperiments(req.params.userId, res);
    })
    
module.exports = router;