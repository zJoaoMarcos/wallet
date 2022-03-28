const express = require('express')
const res = require('express/lib/response')
const app = express()


app.use('/static', express.static('public'));

app.get("/wallet", function(req, res) {
    res.sendFile(__dirname + '/index.html')   
})


app.listen(3000, () => console.log('server is running'))