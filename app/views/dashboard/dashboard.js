'use strict';

angular.module('app.dashboard', [])

  .controller('dashboardCtrl', ['$scope', 'elencoCitta', function ($scope, elencoCitta) {

    var vm = this;

    $scope.ciao = "Salve a tutti";
   
    vm.componentName = "Dashboard";
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


    /*Imposto la variabile elenco alla risposta del servizio*/
    /*    vm.elenco = elencoCitta.elenco;*/
    /*Creo un oggetto citta - da popolare con ng model */
    vm.citta = {};
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

    //SVUOTA CITTA
    vm.svuotaCitta = function () {
      alert("ciao adesso svuoto");
    }

  }]);
