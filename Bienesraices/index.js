//const express = require('express');
import express from 'express';
import userRoutes from './routes/userRoutes.js';

//create app:
const app = express()

// routing
app.get('/', userRoutes);

//define a port then run project:
const port = 3000; 

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});