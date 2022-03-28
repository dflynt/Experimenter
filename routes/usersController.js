const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();

const logger = function(req, res, next) {
    console.log("Received request to " + req.path);
    next();
}

router.use(logger);

router.route('/user/:userId')
    .get((req, res) => {
        var id = req.params.userId;
        res.send("Getting info for user: " + id);
    })
    .put(bodyParser, (req, res) => {
        let id = req.params.userId;
        let fields = req.body.user.updates;
        for(let field in fields) {
            console.log(field + " " + fields[field]);
        }
        res.send("Updated info for user " + id);
    })
    .delete((req, res) => {
        let id = req.params.userId;
        res.send("Deleting user with id: " + id);
    })

router.post('/user', bodyParser, (req, res) => {
    var fields = req.body.user;
    for(let field in fields) {
        console.log(fields[field]);
    }

    res.send('Inserting user ' + req.body.user['author']);
})

module.exports = router;