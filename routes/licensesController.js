const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();

const logger = function(req, res, next) {
    console.log("Receiving request to: " + req.path);
    next();
}

router.use(logger);

router.get('/generateLicense/:instructorId', (req, res) => {
    let id = req.params.instructorId;
    console.log('Generating new license for instructor ' + id);

    res.send("2323-2938-4743-3818");
})

router.route('/license/:licenseId')
    .get((req, res) => {
        let id = req.params.licenseId;
        res.send("Retrieving license information for " + id);
    })
    .put(bodyParser, (req, res) => {
        let licenseId = req.params.licenseId
        let fields = req.body.license;
        for(let field in fields) {
            console.log("Updating license field " + field + " to " + fields[field]);
        }

        res.send("Updated license " + licenseId);
    })
    .delete((req, res) => {
        let id = req.params.licenseId;
        res.send("Deleted license " + id);
    })

module.exports = router;