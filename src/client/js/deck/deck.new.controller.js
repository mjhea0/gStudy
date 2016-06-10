(function(){
  'use strict';

  angular.module('studyApp')
  .controller('newDeckController', newDeckController);

  newDeckController.$inject = ['$scope', 'deckService'];

  function newDeckController($scope, deckService) {
    $scope.deck = {};
    $scope.cards = [];
    $scope.addCard = function(){
      $scope.cards.push('');
    };
    $scope.submitDeck = function(deck, cards) {
      deck.cards = cards;
      deckService.newDeck(deck)
      .then(function(data) {
        $scope.deck = {};
        $scope.cards = [];
      });
    };
  }

})();