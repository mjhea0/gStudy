(function(){
  'use strict';

  angular.module('studyApp')
  .controller('newDeckController', newDeckController);

  newDeckController.$inject = ['$scope', 'newDeckService'];

  function newDeckController($scope, newDeckService) {
    $scope.deck = {};
    $scope.cards = [];
    $scope.addCard = function(){
      $scope.cards.push('');
    };
    $scope.submitDeck = function(deck, cards) {
      deck.cards = cards;
      newDeckService.newDeck(deck)
      .then(function(data) {
        $scope.deck = {};
        $scope.cards = [];
      });
    };
  }

})();