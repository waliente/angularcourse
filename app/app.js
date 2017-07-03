'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  /*'ngRoute',*/
  /* services */
  'cittaServices',
  
  /* my components */
  'app.dashboard',
  'app.cities',
  'app.addCityComponent',
  'app.cityListComponent',

])

/*  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider
      .when("/dashboard", {
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'dashboardCtrl as ctrl'
      })
      .when("/cities", {
        templateUrl: 'views/cities/cities.html',
        controller: 'citiesCtrl as citiesCtrl'
      })
      .when("/cities/:cityName", {
        templateUrl: 'views/cities/cities-detail.html',
        controller: 'citiesCtrl as citiesCtrl'
      })
      .otherwise({
        redirectTo: '/dashboard'      
      })
      ;
  }]);*/

  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'dashboardCtrl as ctrl'
      })
      .state('cities', {
        url: '/cities',
        templateUrl: 'views/cities/cities.html',
        controller: 'citiesCtrl as citiesCtrl',
        /*Parametri personalizzati es: 
          free: false
        */
      })
      .state('cities-detail', {
        url: '/cities-detail/:cityName',
        templateUrl: 'views/cities/cities-detail.html',
        controller: 'citiesCtrl as citiesCtrl'
      })
      ;
    $urlRouterProvider.otherwise('/dashboard');
  /*  $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
     });*/
  }]);
