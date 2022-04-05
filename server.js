const express = require('express');
const bodyParser = require('body-parser');
/* const puppeteer = require('puppeteer');
const fs = require('fs'); */
const wallet = require('./wallet.js')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');   
});

app.post('/', function(req, res) {
    
    const inputAction = req.body.input

    wallet.actionValues(`'${inputAction}/'`)
    console.log(`'${inputAction}/'`)
    
    res.sendFile(__dirname + '/index.html'); 
})


app.listen(3333, () => console.log('server is running...'));   