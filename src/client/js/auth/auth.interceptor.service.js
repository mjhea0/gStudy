(function () {

  'use strict';

  angular.module('studyApp')
  .service('authInterceptor', authInterceptor);

  authInterceptor.$inject = ['$window'];

  function authInterceptor($window) {
    return {
      request: function(config) {
        var token = $window.localStorage.getItem('token');
        if(token) {
          config.headers.Authorization = "Bearer " + token;
        }
        return config;
      }
    };
  }

})();