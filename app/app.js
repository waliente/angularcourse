'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  /*'ngRoute',*/
  /* services */
  'cardService',
  
  /* my components */
  'app.dashboard',
  'app.navMenu',
  'app.cards',
  'app.cardListComponent'
  ])

/*  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider
      .when("/dashboard", {
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'dashboardCtrl as ctrl'
      })
      .when("/product", {
        templateUrl: 'views/product/product.html',
        controller: 'prodCtrl as prodCtrl'
      })
      .when("/product/:productName", {
        templateUrl: 'views/product/product-detail.html',
        controller: 'prodCtrl as prodCtrl'
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
      .state('cards', {
        url: '/cards',
        templateUrl: 'views/cards/cards.html',
        controller: 'cardCtrl as cardCtrl',
        /*Parametri personalizzati es: 
          free: false
        */
      })
      .state('card-detail', {
        url: '/card-detail/:idCard',
        templateUrl: 'views/cards/card-detail.html',
        controller: 'cardDetailCtrl as cardDetailCtrl'
      })
      ;
    $urlRouterProvider.otherwise('/dashboard');
  /*  $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
     });*/
  }])


   .factory('baseUrl', function () {
        return {
            endpoint: "https://swdestinydb.com/api/public"
        }
    })
    .factory("getDIces", function(){
      
    })

    ;
