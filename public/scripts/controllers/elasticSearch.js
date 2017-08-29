'use strict';

angular.module('klabChallengeApp')
  .controller('elasticSearchCtrl', function ($scope, $http, $location, $anchorScroll, url) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.search = function(terms) {
      if(terms){
          $http.post(url+'api/search', {terms: terms}).then(function(response) {
            console.log(response)
            $scope.tweets = response.data.tweets
          }, function(error) {
            console.error(error)
          })
        }else {
          $scope.tweets = null
        }
      }



  });
