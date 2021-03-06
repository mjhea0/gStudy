(function(){

  'use strict';

  angular.module('studyApp')
  .controller('dashboardController', dashboardController);

  dashboardController.$inject = ['$scope', 'deckService', 'authService'];

  function dashboardController($scope, deckService, authService) {
    $scope.decks = [];
    $scope.userId = authService.getUserID();
    // get all decks
    deckService.getDecks($scope.userId)
    .then(function(results) {
      var allDecks = results.data.data;
      if(allDecks.length) {
        // filter decks by user
        var userDecks = allDecks.filter(function(el){
          return parseInt(el.user_id) === parseInt($scope.userId);
        });
        if(userDecks.length) {
          $scope.decks = userDecks;
        } else {
          $scope.message = 'You do not have any decks!';
        }
      }
    });
  }

})();