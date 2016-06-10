(function(){

  'use strict'

  angular
  .module('studyApp')
  .directive('navbarDir', navbarDir)

  function navbarDir() {
    var directive = {
      restrict: 'EA',
      template: `
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="/#/">gStudy</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><a ng-show="!isUserLoggedIn" href="/#/login">Login</a></li>
                <li><a ng-show="!isUserLoggedIn" href="/#/register">Register</a></li>
                <li><a ng-show="isUserLoggedIn" href="/#/logout">Logout</a></li>
              </ul>
            </div><!--/.nav-collapse -->
          </div><!--/.container-fluid -->
        </nav>
        <br>`,
      controller: ['$scope', '$window', function($scope, $window) {
        function testUserLogin() {
          if($window.localStorage.getItem('token')) {
            $scope.isUserLoggedIn = true;
          } else {
            $scope.isUserLoggedIn = false;
          }
        }
        $scope.$watch(testUserLogin)
      }],
    }

    return directive;
  }

})();