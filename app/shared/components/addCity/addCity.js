angular.module("app.addCityComponent", []) 
  .directive("addCity", function() { 
    return { 
      restrict: "E",
      templateUrl: "./shared/components/addCity/addCity.html",
      scope: {
        elencoCitta: "="
      },
      controllerAs: 'addCityCtrl',
      controller: function($scope, elencoCitta){

        var vm = this;

        //AGGIUNGI CITTA
        vm.aggiungiCitta = function (citta) {
          console.log(citta);
          $scope.elencoCitta.unshift(citta);
          vm.citta = {};
        };

        //SALVA CITTA
        vm.salvaCitta = function () {
          elencoCitta.saveAll(vm.citta)
            .success(function () {
              console.log(vm.citta);
              alert("Città aggiunta correttamente!");
            })
            .error(function () {
              alert("Si è verificato un errore!");
            });
        };

      }
    }; 
  }); 