'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  /*'ngRoute',*/
  /* services */
  'prodottiServices',
  
  /* my components */
  'app.dashboard',
  'app.products',
  'app.addProductComponent',
  'app.productListComponent',

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
      .state('product', {
        url: '/product',
        templateUrl: 'views/product/product.html',
        controller: 'prodCtrl as prodCtrl',
        /*Parametri personalizzati es: 
          free: false
        */
      })
      .state('product-detail', {
        url: '/product-detail/:productName',
        templateUrl: 'views/product/product-detail.html',
        controller: 'prodCtrl as prodCtrl'
      })
      ;
    $urlRouterProvider.otherwise('/dashboard');
  /*  $locationProvider.html5Mode({
       enabled: true,
       requireBase: false
     });*/
  }]);
