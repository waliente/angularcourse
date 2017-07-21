'use strict';

angular.module('app.cards')

  .controller('cardDetailCtrl', ['$scope', '$http', '$stateParams', '$state', 'elencoCarte', 'baseUrl', function ($scope, $http, $stateParams, $state, elencoCarte, baseUrl) {

    var vm = this;

    console.log("card detail" + $stateParams.idCard);

    elencoCarte.getDetail($stateParams.idCard)
        .then(function (res) {
          /*console.log("card detail" + res.data);*/
          vm.card = res.data;
          console.log("card detail ", vm.card.code);
          
        })
        .catch(function () {
           console.log("Si è verificato un errore!");
        });

  }]);
