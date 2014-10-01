'use strict';

angular.module('autovalutazioneApp').
	controller('MainCtrl', [ '$scope', '$document','$http',
	function ($scope, $document,$http) {
    
		$scope.questioni = [
			{domanda:'Per iniziare indica gentilmente la tua fascia di età', risposte:['20-30','30-40','50+']},
			{domanda:'Hai sofferto  di malessere o importanti lesioni cutanee dopo esserti esposta al sole o aver fatto una lampada solare?',risposte:['SI','NO']},
			{domanda:'Perdi molti capelli o li perdi a ciocche?',risposte:['SI','NO']},
			{domanda:'Ti senti spesso esageratamente stanca? ',risposte:['SI','NO']},
			{domanda:'Hai periodi di febbre o febbricola inspiegata?',risposte:['SI','NO']},
			{domanda:'Hai notato la comparsa di “ghiandole” (linfonodi) ingrossate al collo, alle ascelle o all’inguine?',risposte:['SI','NO']},
			{domanda:'Hai sofferto o soffri di afte/ulcere in bocca o dentro al naso?',risposte:['SI','NO']},
			{domanda:'Hai mai notato gonfiore o avvertito dolore a livello di qualche articolazione in assenza di cause evidenti (ad esempio trauma)',risposte:['SI','NO']},
			{domanda:'Hai notato che le punte delle dita ( mani e/o piedi) diventano bianche e/o livide (cianotiche) come se non “arrivasse sangue” quando ti esponi al freddo o in occasione di grosse emozioni?',risposte:['SI','NO']}
		];  // elenco delle domande


		
		$scope.resetQuestionario = function() {
			$scope.risultatiScheda = false;
			$scope.risultatiBtn = false;
			$scope.risultatiVisibili = false;
			$scope.currDomanda=0;
			$scope.currRisposta = [];
			$scope.numeroRispostePositive = '0';
			$scope.testCompletato = false;
			$scope.risultatoNegativo = false;
			$scope.risultatoPositivo = false;
		}

		$scope.resetQuestionario();

		$scope.inizia = function() { console.log('Inizio:');			
			$scope.resetQuestionario();
			$scope.scrollaTo('questionContainer');
		};

		$scope.showNextQuestion = function (idx) {
			$scope.currDomanda = idx + 1;  // mostra la scheda successiva
			var nextQuestion = 'scheda' + idx;
			$scope.scrollaTo(nextQuestion);
		};

		$scope.updateQuestionsResults = function (idx,risposta) {
			$scope.currRisposta[idx] = risposta;
			if($scope.currRisposta[idx] =='SI'){
						$scope.numeroRispostePositive++;						
					}						
			if (idx >= (Object.keys($scope.questioni).length-1)) {  // Lunghezza delle key dell'oggetto parte da 1
				$scope.testCompletato= true;
				$scope.risultatiBtn = true;
				$scope.risultatiScheda = true;
			}
		};
		
		$scope.aggiungiRisultatoNelDB = function () {
			var sql = '';
			for ( var index=0; index<$scope.currRisposta.length; index++ ) {					
					sql += 'Q' + (index+1) + '=' +$scope.currRisposta[index] + '&';					
			}
			$http.get('http://localhost/~buddyholly/sondaggio.php?task=insert&'+sql).success(function(data){
			console.log('Record aggiunto con successo');
			});
		};

		$scope.mostraRisultati = function () {
			$scope.risultatiBtn = false;
			$scope.risultatiVisibili = true;			
			if ($scope.numeroRispostePositive >= 2) {
				$scope.risultatoPositivo = true;
			} else {
				$scope.risultatoNegativo = true;
			}
			$scope.aggiungiRisultatoNelDB();
		};

		$scope.update = function (idx,risposta) {
			if(!$scope.testCompletato) {
				$scope.showNextQuestion(idx);
				$scope.updateQuestionsResults(idx,risposta);
			}			
		};

		$scope.scrollaTo = function(elem) {
			var currQuestion = angular.element(document.getElementById(elem));
			$document.scrollToElementAnimated(currQuestion);
		};

		$scope.toTheTop = function() {
			$document.scrollTopAnimated(0);
		};


	}]);