angular.module("app.addProductComponent", []) 
  .directive("addProduct", function() { 
    return { 
      restrict: "E",
      templateUrl: "./shared/components/addProduct/addProduct.html",
      scope: {
        elencoProdotti: "=",
        svuotaProdotto: "&",
      },
      controllerAs: 'addProductCtrl',
      controller: function($scope, elencoProdotti){

        var vm = this;

        //AGGIUNGI PRODOTTO
        vm.aggiungiProdottto = function (prodotto) {
          console.log(prodotto);
          $scope.elencoProdotti.unshift(prodotto);
          vm.prodotto = {};
        };

        //SALVA PRODOTTO
        vm.salvaProdotto = function () {
          elencoProdotti.saveAll(vm.prodotto)
            .success(function () {
              console.log(vm.prodotto);
              alert("Prodotto aggiunto correttamente!");
            })
            .error(function () {
              alert("Si è verificato un errore!");
            });
        };

        

      }
    }; 
  }); 