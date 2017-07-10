angular.module("app.productListComponent", []) 
  .component("productList", { 
      restrict: "E",
      templateUrl: "./shared/components/productList/productList.html",
      bindings: {
          /* Accetta gli scope */
          elencoProdotti: "<",
         /* Accetta solo in ingresso
            elencoProdotti: "<",
          */
         /* Accetta le stringhe 
            elencoProdotti: "@",
         */
         /* Accetta le function
            elencoProdotti: "&",
          */
         /* Ignora errori dovuti al fatto che non ci sia lo scope
            elencoProdotti: "=?",
         */
      },
      controller: "prodListCtrl",
      controllerAs: "prodListCtrl"
  })
     .controller('prodListCtrl', ['$scope', 'elencoProdotti', function ($scope, elencoProdotti) {
         var vm = this;
     }])
  ; 