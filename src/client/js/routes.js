(function () {

  'use strict';

  angular.module('studyApp')
  .config(appConfig)
  .run(routeChange);

  appConfig.$inject = ['$routeProvider', '$httpProvider'];
  routeChange.$inject = ['$rootScope', '$location', '$window'];

  function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'js/dashboard/dashboard.template.html',
      controller: 'dashboardController',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/new', {
      templateUrl: 'js/deck/new.deck.template.html',
      controller: 'newDeckController',
      restricted: true,
      preventLoggedIn: false
    })
     .when('/:id/add', {
      templateUrl: 'templates/addQuiz.html',
      controller: 'addQuiz',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/:id/quiz', {
      templateUrl: 'templates/quiz.html',
      controller: 'quizController',
      restricted: true,
      preventLoggedIn: false
    })
    .when('/register',{
      templateUrl: 'js/auth/register.template.html',
      controller: 'registerController',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/login', {
      templateUrl: 'js/auth/login.template.html',
      controller: 'loginController',
      restricted: false,
      preventLoggedIn: true
    })
    .when('/logout', {
      restricted: false,
      preventLoggedIn: false,
      resolve: {
        test: function(authService, $rootScope, $location) {
          authService.logout();
          $rootScope.currentUser = authService.getUserID();
          $location.path('/login');
        }
      }
    })
    .otherwise({redirectTo: '/decks'});
    $httpProvider.interceptors.push('authInterceptor');
  }

  function routeChange($rootScope, $location, $window) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // redirect to login if route is restricted and no token is present
      if(next.restricted && !$window.localStorage.getItem('token')) {
        $location.path('/login');
      }
      // if token and prevent logging in is true
      if(next.preventLoggedIn && $window.localStorage.getItem('token')) {
        $location.path('/');
      }
    });
  }

})();