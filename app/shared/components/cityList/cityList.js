angular.module("app.cityListComponent", []) 
  .component("cityList", { 
      restrict: "E",
      templateUrl: "./shared/components/cityList/cityList.html",
      bindings: {
<<<<<<< HEAD
          elencoCitta: "=cityList",
          ciao: "=saluto"
=======
          elencoCitta: "=",
          saluto: "<"
>>>>>>> ce608e91fa050c3d2537300e4cae7dfd300e6856
      },
      controller: "cityListCtrl",
      controllerAs: "cityListCtrl"
  })
     .controller('cityListCtrl', ['$scope', 'elencoCitta', function ($scope, elencoCitta) {
         console.log(this.ciao);
         console.log($scope.elencoCitta)
     }])
  ; 