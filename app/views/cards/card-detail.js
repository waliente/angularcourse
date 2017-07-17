'use strict';

angular.module('app.cards')

  .controller('cardDetailCtrl', ['$scope', '$http', '$stateParams', '$state', 'elencoCarte', function ($scope, $http, $stateParams, $state, elencoCarte) {

    var vm = this; 

    $http.get("./data/" + $stateParams.productName + ".json?nome=Laser")
     .then(function (response) {
         console.log(response.data);

         vm.singleProduct = response.data;
         vm.selectedSize = vm.singleProduct.taglia[0];

      })
      .catch(function () {
        alert("Si è verificato un errore!");
      });

      vm.goTo = function(url){
        $state.go(url)
    }

  }]);
