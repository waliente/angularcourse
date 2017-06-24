angular.module("app.cityListComponent", []) 
  .component("cityList", { 
      restrict: "E",
      templateUrl: "./shared/components/cityList/cityList.html",
      bindings: {
          elencoCitta: "=cityList",
          ciao: "=saluto"
      },
      controller: "cityListCtrl",
      controllerAs: "cityListCtrl"
  })
     .controller('cityListCtrl', ['$scope', 'elencoCitta', function ($scope, elencoCitta) {
         console.log(this.ciao);
         console.log($scope.elencoCitta)
     }])
  ; 