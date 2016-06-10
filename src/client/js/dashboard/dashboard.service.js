(function () {

  'use strict';

  angular.module('studyApp')
  .service('dashboardService', dashboardService);

  dashboardService.$inject = ['$http', '$window'];

  function dashboardService($http, $window) {
    var currentID = {};
    return {
      getDecks: function() {
        return $http.get('/api/v1/decks');
      }
    };
  }

})();