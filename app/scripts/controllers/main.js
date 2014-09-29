'use strict';

angular.module('autovalutazioneApp').
	controller('MainCtrl', [ '$scope', '$log','$document',
	function ($scope,$log,$document) {
    
		$scope.questioni = [
			'La tua età',
			'Hai sofferto  di malessere o importanti lesioni cutanee dopo esserti esposta al sole o aver fatto una lampada solare?',
			'Perdi molti capelli o li perdi a ciocche?',
			'3. Ti senti spesso esageratamente stanca? ',
			'Hai periodi di febbre o febbricola inspiegata?',
			'Hai notato la comparsa di “ghiandole” (linfonodi) ingrossate al collo, alle ascelle o all’inguine?',
			'Hai sofferto o soffri di afte/ulcere in bocca o dentro al naso?',
			'Hai mai notato gonfiore o avvertito dolore a livello di qualche articolazione in assenza di cause evidenti (ad esempio trauma)',
			'Hai notato che le punte delle dita ( mani e/o piedi) diventano bianche e/o livide (cianotiche) come se non “arrivasse sangue” quando ti esponi al freddo o in occasione di grosse emozioni?'
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