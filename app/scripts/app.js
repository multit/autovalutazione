'use strict';

var app = angular.module('autovalutazioneApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
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
  });

app.controller('tasksController', function($scope,$log) {
	$scope.$log = $log;

	$scope.showNextQuestion = function (idx) {
		$log.log('Mostra la prossima domanda' + idx);
	};
	$scope.updateQuestionsResults = function (idx,risposta) {
		$log.log('aggiorna il database'+ risposta + ' ' + idx);
	};
	$scope.update = function (idx,risposta) {
		$scope.showNextQuestion(idx);
		$scope.updateQuestionsResults(idx,risposta);
	};
});