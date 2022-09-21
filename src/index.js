const express = require('express');
const app = express();
const port = 3000;


// import json data from database
const dataTodos = require('../src/database/todos.json');
const dataUsers = require('../src/database/users.json');

// Route Microservices
app.get('/', (req, res) => {
    res.send('Hello Microservice You can use /todos and /users! to get our service!');
});

app.get(`/todos`, (req, res) => {
    
    // Query Database from microservice with json

    try {
        res.json(dataTodos);        
    } catch (error) {
        console.log(error);

        res.sendStatus(500);
    }

});

app.get(`/users`, (req, res) => {

    // Query Database from microservice with json

    try {
        res.json(dataUsers);        
    } catch (error) {
        console.log(error);

        res.sendStatus(500);
    }
});


app.listen(port, () => {
    console.log(`Connecting Microservice on port ${port}`);
});