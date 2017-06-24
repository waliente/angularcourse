angular.module("app.cityListComponent", []) 
  .component("cityList", { 
      restrict: "E",
      templateUrl: "./shared/components/cityList/cityList.html",
      bindings: {
          elencoCitta: "=",
          saluto: "="
      },
      controller: "cityListCtrl"
  })
     .controller('cityListCtrl', ['$scope', 'elencoCitta', function ($scope, elencoCitta) {
         console.log($scope.ciao)
     }])
  ; 