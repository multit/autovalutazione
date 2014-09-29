'use strict';

/**
 * @ngdoc directive
 * @name autovalutazioneApp.directive:scrollTo
 * @description
 * # scrollTo
 */
angular.module('autovalutazioneApp')
  .directive('scrollTo', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element) {
        element.text('this is the scrollTo directive');
      }
    };
  });
