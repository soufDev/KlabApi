var mongoose = require('mongoose'),
    mongoosastic = require("mongoosastic"),
    Schema = mongoose.Schema,
        mongoConfig = require('../../config').mongo


var tweetSchema = new Schema({
    author: String,
    content: String,
    profile_picture: String,
    created_at: String
})

tweetSchema.plugin(mongoosastic)

mongoose.connect(mongoConfig.url, mongoConfig.mongoClient)
mongoose.model("Tweet", tweetSchema)

tweetSchema.plugin(mongoosastic)

var Tweet = mongoose.model("Tweet", tweetSchema)

Tweet.createMapping(function(error, mapping){
    if(error) {
        console.log('error when we create mapping')
        console.log(error)
    } else {
        console.log('mapping created :D ')
        console.log(mapping)
    }
})


module.exports = {
  Tweet: Tweet
}
