'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',    
    'ngResource',
    'ngRoute',    
    'firebase',
    'toaster'
  ])
  .constant('FURL', 'https://task-ninja-1012.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'TaskController'     
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });