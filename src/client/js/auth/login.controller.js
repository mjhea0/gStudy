(function () {

  'use strict';

  angular.module('studyApp')
  .controller('loginController', loginController);

  loginController.$inject = ['$rootScope', '$scope', '$location', 'authService'];

  function loginController($rootScope, $scope, $location, authService) {
    $scope.user = {};
    $scope.login = function() {
      authService.login($scope.user)
      .then(function(user) {
        user.id = user.data.data.user;
        authService.setUserInfo(user);
        $location.path('/decks');
        $rootScope.currentUser = authService.getUserID();
      })
      .catch(function(err) {
        console.log(err);
      });
    };
  }

})();