const express = require('express')
const res = require('express/lib/response')
const app = express()


app.get("/wallet", function(req, res) {
    res.sendFile(__dirname + '/index.html')   
})


app.listen(3500, () => console.log('server is running'))