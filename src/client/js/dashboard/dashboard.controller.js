(function(){

  'use strict';

  angular.module('studyApp')
  .controller('dashboardController', dashboardController);

  dashboardController.$inject = ['$scope', 'dashboardService', 'authService'];

  function dashboardController($scope, dashboardService, authService) {
    $scope.decks = [];
    $scope.recommendedQuiz = [];
    $scope.userId = authService.getUserID();
    // get all decks
    dashboardService.getDecks($scope.userId)
    .then(function(results) {
      var allDecks = results.data.data;
      if(allDecks.length) {
        // filter decks by user
        var userDecks = allDecks.filter(function(el){
          return parseInt(el.user_id) === parseInt($scope.userId);
        });
        $scope.decks = userDecks;
      }
    });
  }

})();