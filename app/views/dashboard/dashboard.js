'use strict';

angular.module('app.dashboard', [])

  .controller('dashboardCtrl', ['$scope', function ($scope) {
    var vm = this;
    vm.componentName = "Dashboard"
  }]);
