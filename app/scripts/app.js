'use strict';

angular.module('autovalutazioneApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'duScroll'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).value('duScrollOffset', -400);

