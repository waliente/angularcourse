'use strict';

angular.module('app.products')

  .controller('prodDetailCtrl', ['$scope', '$http', '$stateParams', '$state', 'elencoProdotti', function ($scope, $http, $stateParams, $state, elencoProdotti) {

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
