(function(){
  'use strict';

  angular.module('studyApp')
  .controller('deckController', deckController);

  deckController.$inject = ['$scope', '$routeParams', 'deckService'];

  function deckController($scope, $routeParams, deckService) {
    deckService.getSingleDeck($routeParams.id)
    .then(function(results) {
      $scope.deck = results.data.data[0];
    });
  }

})();