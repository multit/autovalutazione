'use strict';

angular.module('autovalutazioneApp')
  .controller('MainCtrl', function ($scope) {
    $scope.questioni = [
      'La tua età',
      'Da quando',
      'Come ti sei accorta'
    ];
  });
