angular.module("app.cardListComponent", []) 
  .component("productList", { 
      restrict: "E",
      templateUrl: "./shared/components/cardList/cardList.html",
      bindings: {
          /* Accetta gli scope */
          elencoCarte: "<",
         /* Accetta solo in ingresso
            elencoCarte: "<",
          */
         /* Accetta le stringhe 
            elencoCarte: "@",
         */
         /* Accetta le function
            elencoCarte: "&",
          */
         /* Ignora errori dovuti al fatto che non ci sia lo scope
            elencoCarte: "=?",
         */
      },
      controller: "cardListCtrl",
      controllerAs: "ctrl"
  })
     .controller('cardListCtrl', ['$scope', 'elencoCarte', function ($scope, elencoCarte) {
         var vm = this;
     }])
  ; 