(function () {

  'use strict';

  angular.module('studyApp')
  .controller('registerController', registerController);

  registerController.$inject = ['$rootScope', '$scope', '$location', 'authService'];

  function registerController(
    $rootScope, $scope, $location, authService) {
    $scope.user = {};
    $scope.register = function() {
      authService.register($scope.user)
        .then(function(user) {
          authService.setUserInfo(user);
          $location.path('/');
          $rootScope.currentUser = authService.getUserID();
        })
        .catch(function(err) {
          console.log(err);
        });
    };
  }

})();