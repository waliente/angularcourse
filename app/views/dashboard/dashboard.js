'use strict';

angular.module('app.dashboard', [])

  .controller('dashboardCtrl', ['$scope', 'elencoCitta' , function ($scope, elencoCitta) {
    var vm = this;
    vm.componentName = "Dashboard";
    /*Imposto la variabile elenco alla risposta del servizio*/
    vm.elenco = elencoCitta.elenco

    vm.aggiungiCitta = function(){
      elencoCitta.aggiungi({
        nome: vm.citta.nome, 
        regione: vm.citta.regione
      })
    }
  }]);
