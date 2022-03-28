const express = require('express');
const instructors = require('./routes/instructorsController');
const experiments = require('./routes/experimentsController');
const users = require('./routes/usersController');
const institutions = require('./routes/institutionsController');
const licenses = require('./routes/licensesController');

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