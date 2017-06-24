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
        vm.elenco = data
      })
      /*Errore (error)*/
      .error(function () {
        alert("Si è verificato un errore!");
      });


    /*Imposto la variabile elenco alla risposta del servizio*/
    vm.elenco = elencoCitta.elenco;
    /*Creo un oggetto citta - da popolare con ng model */
    vm.citta = {};
    /*Creo un oggetto utente */
    vm.utente = {};


    //AGGIUNGI CITTA
    vm.aggiungiCitta = function () {
      console.log(vm.citta);
      vm.elenco.unshift({
        nome: vm.citta.nome,
        regione: vm.citta.regione
      })
    };


    //SALVA CITTA
    vm.salvaCitta = function () {
      console.log(vm.citta);
      elencoCitta.saveAll(vm.citta)
        .success(function () {
          console.log(vm.citta);
          alert("Città aggiunta correttamente!");
        })
        .error(function () {
          console.log(vm.citta);
          alert("Si è verificato un errore!");
        })
    };

    //INVIA DATI UTENTE
    vm.inviaForm = function () {
      console.log(vm.utente);
      if ($scope.utenteForm.$valid) {
        alert("Dati inviati Ok")
      } else {
        alert("errore")
      }
    }

  }]);
