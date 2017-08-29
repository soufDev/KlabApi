'use strict';

myApp.factory('AllTweets', function ($http, $q, url) {
    var factory = {
      AllTweets : false,
      getTweets : function () {
        var deferred = $q.defer();
        if(factory.AllTweets !== false) {
          deferred.resolve(factory.AllTweets);
        }else {
          $http.get(url+'api/search')
            .then(function (success) {
              factory.AllTweets = success;
              deferred.resolve(factory.AllTweets);
            },function (data) {
                deferred.reject('Impossible To get Tweets', data);
            });
        }
        return deferred.promise;
      }
    };
    return factory;
});