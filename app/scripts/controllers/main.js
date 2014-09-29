'use strict';

angular.module('autovalutazioneApp').
	controller('MainCtrl', [ '$scope', '$log','$document',
	function ($scope,$log,$document) {
    $scope.questioni = [
			'La tua età',
			'Da quando',
			'Come ti sei accorta',
			'Come ti sei accorta2',
			'Come ti sei accorta 3 questione',
			'Come ti sei accorta 4 questione'
    ];
		$scope.$log = $log;

		$scope.scrollaTo = function(elem) {
			var currQuestion = angular.element(document.getElementById(elem));
			$log.log(elem);
			$document.scrollToElementAnimated(currQuestion);
		};

		$scope.toTheTop = function() {
			$document.scrollTopAnimated(0);
		};		

		$scope.showNextQuestion = function (idx) {
			$log.log('test');
			$scope.schedaNo = idx + 1;  // mostra la scheda successiva
			var nextQuestion = 'scheda' + idx;
			$scope.scrollaTo(nextQuestion);
		};

		$scope.updateQuestionsResults = function (idx,risposta) {
			$log.log('aggiorna il database'+ risposta + ' ' + idx);
		};
		$scope.update = function (idx,risposta) {
			$scope.showNextQuestion(idx);
			$scope.updateQuestionsResults(idx,risposta);
		};
	}]);