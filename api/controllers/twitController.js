var mongoose = require('mongoose')

var Twitter = require('twit')
var twits = require('../models/twits'),
    Tweet = twits.Tweet
var config = require('../../config')

function searchedData(error, data, response) {
    data.statuses.forEach(function(element) {
        var newTweet = new Tweet({
            author: element.user.name,
            content: element.text,
            profile_picture: element.user.profile_image_url,
            created_at: element.created_at
        })
        newTweet.save(function(error) {
            if(error)
                console.log('there is an error when we save a new tweet')
        })
    });
}


var params = {
    q: '#meinunterricht',
    count: 100
}

var createData = function() {
  return new Twitter(config.twitter)
    .get('search/tweets', params, searchedData);
}

var deletleAll = function() {
    Tweet.find({}, function(err, tweets){
        if(err) throw err
        else tweets.forEach(function(element){
          if(element)
              element.remove(function(error){
                  if (error) throw error;
                  element.on('es-removed', function(err, res) {
                      if (err) throw err;
                  });
              })
        })
    })
}

module.exports = {
  createData: createData,
  deletleAll: deletleAll
}
