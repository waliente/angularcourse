angular.module("app.navMenu", []) 
  .component("navMenu", { 
      restrict: "E",
      templateUrl: "./shared/components/navMenu/navMenu.html",
      bindings: {
      },
      controller: "navMenuCtrl",
      controllerAs: "ctrl"
  })

     .controller('navMenuCtrl', ['$scope', function ($scope) {
         var vm = this;
     }])
  ; 