const express = require('express');
const instructors = require('./src/routes/instructorsController');
const experiments = require('./src/routes/experimentsController');
const users = require('./src/routes/usersController');
const institutions = require('./src/routes/institutionsController');
const licenses = require('./src/routes/licensesController');

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Hello world")
});


app.listen(port, () => {
    console.log("Application listening on port " + port)
});

app.use('/api/v1/instructors', instructors);
app.use('/api/v1/experiments', experiments);
app.use('/api/v1/users', users);
app.use('/api/v1/institutions', institutions);
app.use('/api/v1/licenses', licenses);