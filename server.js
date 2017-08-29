var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser')

var Twitter = require('twit')

var config = require('./config')

app.use(express.static('public'))
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}))
//
var mongoose = require("mongoose");
var mongoosastic=require("mongoosastic"),
    Schema = mongoose.Schema

mongoose.Promise = global.Promise


var twitController = require('./api/controllers/twitController')
twitController.deletleAll()
twitController.createData()
var twits = require('./api/models/twits')
app.post("/api/search", function(req,res) {
    var terms=req.body.terms;
    twits.Tweet.search({ query_string: { query:terms } }, function(err,results) {
        console.log(results)
        res.send({ terms:terms, tweets:results.hits.hits })
    });
});

app.get("/api/search", function(req, res) {
    twits.Tweet.find({}, function(err, tweets){
        if(err)
            console.log(err)
        else res.json(tweets)
    })
})
app.listen(port)
console.log(config.mongo)
