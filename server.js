const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items')

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose
    .connect(db,{useNewUrlParser: true})
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.log('Cant connect do DB: ',err))

//use Routes
app.use('/api/items',items);

//for deployment
const port= process.env.PORT || 5000;

app.listen(port,()=>console.log('server started on port',port))