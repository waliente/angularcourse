'use strict';

angular.module('app.dashboard', [])

  .controller('dashboardCtrl', ['$scope', 'elencoCitta' , function ($scope, elencoCitta) {
    var vm = this;
    vm.componentName = "Dashboard";
    /*Imposto la variabile elenco alla risposta del servizio*/
    vm.elenco = elencoCitta.elenco;
    vm.citta = {};
    vm.aggiungiCitta = function(){
      console.log(vm.citta)
      elencoCitta.aggiungi({
        nome: vm.citta.nome, 
        regione: vm.citta.regione
      })
    }
  }]);
