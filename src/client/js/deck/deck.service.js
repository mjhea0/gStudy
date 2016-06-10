(function () {

  'use strict';

  angular.module('studyApp')
  .service('deckService', deckService);

  deckService.$inject = ['$http', '$window'];

  function deckService($http, $window) {
    return {
      getDecks: function() {
        return $http.get('/api/v1/decks');
      },
      getSingleDeck: function(deckID) {
        return $http.get('/api/v1/decks/'+deckID);
      },
      newDeck: function(deck) {
        return $http.post('/api/v1/decks', deck);
      }
    };
  }

})();