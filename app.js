/**
 * Created by shaguptaf on 30-1-2015.
 */
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

var server = app.listen(1000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})
