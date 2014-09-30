'use strict';

angular.module('autovalutazioneApp').
	controller('MainCtrl', [ '$scope', '$document',
	function ($scope, $document) {
    
		$scope.questioni = [
			{domanda:'Per iniziare indica gentilmente la tua fascia di età', risposte:['20-30','30-40','50+']},			
			{domanda:'Hai sofferto  di malessere o importanti lesioni cutanee dopo esserti esposta al sole o aver fatto una lampada solare?',risposte:['SI','NO']},
			// {domanda:'Perdi molti capelli o li perdi a ciocche?',risposte:['SI','NO']},
			// {domanda:'Ti senti spesso esageratamente stanca? ',risposte:['SI','NO']},
			// {domanda:'Hai periodi di febbre o febbricola inspiegata?',risposte:['SI','NO']},
			// {domanda:'Hai notato la comparsa di “ghiandole” (linfonodi) ingrossate al collo, alle ascelle o all’inguine?',risposte:['SI','NO']},
			// {domanda:'Hai sofferto o soffri di afte/ulcere in bocca o dentro al naso?',risposte:['SI','NO']},
			// {domanda:'Hai mai notato gonfiore o avvertito dolore a livello di qualche articolazione in assenza di cause evidenti (ad esempio trauma)',risposte:['SI','NO']},
			{domanda:'Hai notato che le punte delle dita ( mani e/o piedi) diventano bianche e/o livide (cianotiche) come se non “arrivasse sangue” quando ti esponi al freddo o in occasione di grosse emozioni?',risposte:['SI','NO']}
		];

		$scope.currDomanda;


		$scope.inizia = function() {
			$scope.schedaNo=0;
			$scope.scrollaTo('questionContainer');
		}

		$scope.showNextQuestion = function (idx) {
			$scope.schedaNo = idx + 1;  // mostra la scheda successiva
			var nextQuestion = 'scheda' + idx;
			$scope.scrollaTo(nextQuestion);
		};

		$scope.updateQuestionsResults = function (idx,risposta) {
			if (idx < (Object.keys($scope.questioni).length-1)) {  // Lunghezza delle key dell'oggetto parte da 1
				console.log('Questione: '+ idx + '\nRisposta selezionata: ' + risposta);
				} else {
				$scope.mostraRisultati();	
				console.log('Mostra i risultati' + Object.keys($scope.questioni).length);		
			}			
		};

		$scope.mostraRisultati = function () {
			$scope.risultatiTest = true;
		}

		$scope.update = function (idx,risposta) {
			$scope.showNextQuestion(idx);
			$scope.updateQuestionsResults(idx,risposta);
		};

		$scope.scrollaTo = function(elem) {
			var currQuestion = angular.element(document.getElementById(elem));
			$document.scrollToElementAnimated(currQuestion);
		};

		$scope.toTheTop = function() {
			$document.scrollTopAnimated(0);
		};


	}]);