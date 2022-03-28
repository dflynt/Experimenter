const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const service = require('../services/userService');

const logger = function(req, res, next) {
    console.log("Received request to " + req.path);
    next();
}

router.use(logger);

router.route('/user/:userId')
    .get((req, res) => {
        service.selectUser(req.params.userId, res);
    })
    .post(bodyParser, (req, res) => {
        service.createUser(req.body.user, res);
    })
    .put(bodyParser, (req, res) => {
        service.updateUser(req.params.userId, req.body.user.updates, res);
    })
    .delete((req, res) => {
        service.deleteUser(req.params.userId, res)
    })

module.exports = router;