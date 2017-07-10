'use strict';

angular.module('app.dashboard', [])

  .controller('dashboardCtrl', ['$scope', 'elencoProdotti', function ($scope, elencoProdotti) {

    var vm = this;

    $scope.ciao = "Salve a tutti";
   
    vm.componentName = "Dashboard";
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


    /*Imposto la variabile elenco alla risposta del servizio*/
    /*    vm.elenco = elencoProdotti.elenco;*/
    /*Creo un oggetto prodotto - da popolare con ng model */
    vm.prodotto = {};
    /*Creo un oggetto utente */
    vm.utente = {};

    //INVIA DATI UTENTE
    vm.inviaForm = function () {
      console.log(vm.utente);
      if ($scope.utenteForm.$valid) {
        alert("Dati inviati Ok")
      } else {
        alert("errore")
      }
    }

    //SVUOTA PRODOTTO
    vm.svuotaProdotto = function () {
      alert("ciao adesso svuoto");
      vm.elenco = [];
    }

  }]);
