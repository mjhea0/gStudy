(function () {

  'use strict';

  angular.module('studyApp')
  .service('newDeckService', newDeckService);

  newDeckService.$inject = ['$http', '$window'];

  function newDeckService($http, $window) {
    return {
      newDeck: function(deck) {
        return $http.post('/api/v1/decks', deck);
      }
    };
  }

})();