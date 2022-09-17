const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get(`/todos`, (req, res) => {

    // do a database query... return todos from database

    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            res.json(response.data)
        })
        .catch(err => {
            console.error(err);
            
            res.sendStatus(500);
        })
});

app.get(`/users`, (req, res) => {

    // do a database query... return todos from database

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            res.json(response.data)
        })
        .catch(err => {
            console.error(err);
            
            res.sendStatus(500);
        })
});


app.listen(port, () => {
    console.log(`Connecting Microservice on port ${port}`);
});