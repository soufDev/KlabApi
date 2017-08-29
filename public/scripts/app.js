'use-strict';
var myApp = angular.module('klabChallengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).constant('url', 'http://localhost:3000/')

myApp.config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/elasticSearch.html',
        controller: 'elasticSearchCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
