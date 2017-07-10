'use strict';

angular.module('app.products', [])

  .controller('prodCtrl', ['$scope','$stateParams', '$state', 'elencoProdotti', function ($scope, $stateParams, $state, elencoProdotti) {

    var vm = this; 

    elencoProdotti.getAll()
    /*Successo (success)*/
      .success(function (data) {
        console.log(data);
        vm.elenco = data;
      })
      /*Errore (error)*/
      .error(function () {
        alert("Si è verificato un errore!");
      });

    console.log("Stai osservando il prodotto " + $stateParams.productName);

    vm.nomeProdotto = $stateParams.productName;

    vm.goTo = function(url){
        $state.go(url)
    }
  }]);
