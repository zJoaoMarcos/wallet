const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');   
});

app.post('/', function(req, res) {
    res.write(req.body.actions);
    res.end();
});


app.listen(3000, () => console.log('server is running in 3000'));