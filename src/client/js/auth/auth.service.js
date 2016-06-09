(function () {

  'use strict';

  angular.module('studyApp')
  .service('authService', authService);

  authService.$inject = ['$http', '$window'];

  function authService($http, $window) {

    var user = {};

    return {
      login: function(user) {
        return $http.post('/auth/login', user);
      },
      logout: function(user) {
        user = {};
        $window.localStorage.clear();
      },
      register: function(user) {
        return $http.post('/auth/register', user);
      },
      setUserInfo: function(userData) {
        $window.localStorage.setItem(
          'user', JSON.stringify(userData.data.data.userID));
        $window.localStorage.setItem(
          'token', JSON.stringify(userData.data.data.token));
      },
      getUserID: function(userData) {
        return $window.localStorage.getItem('user');
      }
    };

  }

})();

