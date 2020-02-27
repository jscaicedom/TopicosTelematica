const express = require('express');
const path = require('path');

//ini

const app = express();

// settings

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

//mid

app.use(express.urlencoded({extended: false}));

//global vars

//ruta

app.get('/', (req, res) => {
    res.send("hello world")
})

//static

app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;