(function () {

  'use strict';

  angular.module('studyApp')
  .service('deckService', deckService);

  deckService.$inject = ['$http', '$window'];

  function deckService($http, $window) {
    var currentID = {};
    return {
      getDecks: function() {
        return $http.get('/api/v1/decks');
      }
    };
  }

})();