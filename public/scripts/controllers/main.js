'use strict';

angular.module('klabChallengeApp')
  .controller('MainCtrl', function ($scope, $http, $location, $anchorScroll, AllTweets) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.loading = true;
    AllTweets.getTweets().then(function(response){
      console.log(response)
      $scope.AllTweets = response.data
    })
  });
