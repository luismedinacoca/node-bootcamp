//const express = require('express');
import express from 'express';
import userRoutes from './routes/userRoutes.js';

//create app:
const app = express()

//Enable Pug:
app.set('view engine', 'pug');
app.set('views', './views');


// routing
//app.get('/', userRoutes);
app.use('/auth', userRoutes);

//define a port then run project: 
const port = 3000; 

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
}); 