//const express = require('express');
import express from 'express';

//create app:
const app = express()

// routing
app.get('/', (req, res) => {
    res.send("Hello world from Server!");
});

app.get('/about-us', (req, res) => {
    res.send("About us!");
})

//define a port then run project:
const port = 3000; 

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});