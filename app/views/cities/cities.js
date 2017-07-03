'use strict';

angular.module('app.cities', [])

  .controller('citiesCtrl', ['$scope','$stateParams', '$state', 'elencoCitta', function ($scope, $stateParams, $state, elencoCitta) {

    var vm = this; 

    elencoCitta.getAll()
    /*Successo (success)*/
      .success(function (data) {
        console.log(data);
        vm.elenco = data;
      })
      /*Errore (error)*/
      .error(function () {
        alert("Si è verificato un errore!");
      });

    console.log($stateParams.cityName);

    vm.nomeCitta = $stateParams.cityName;

    vm.goTo = function(url){
        $state.go(url)
    }
  }]);
