'use strict';

angular.module('app.dashboard', [])

  .controller('dashboardCtrl', ['$scope', 'elencoCitta' , function ($scope, elencoCitta) {
    var vm = this;
    vm.componentName = "Dashboard";

    vm.elenco = elencoCitta.elenco
  }]);
