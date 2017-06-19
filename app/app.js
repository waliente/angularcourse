'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  /* my components */
  'app.dashboard'
])

  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'dashboardCtrl as ctrl'
      });
    $urlRouterProvider.otherwise('/dashboard');
  }]);
