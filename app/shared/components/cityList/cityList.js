angular.module("app.cityListComponent", []) 
  .component("cityList", { 
      restrict: "E",
      templateUrl: "./shared/components/cityList/cityList.html",
      bindings: {
          /* Accetta gli scope */
          elencoCitta: "=",
         /* Accetta solo in ingresso
            elencoCitta: "<",
          */
         /* Accetta le stringhe 
            elencoCitta: "@",
         */
         /* Accetta le function
            elencoCitta: "&",
          */
         /* Ignora errori dovuti al fatto che non ci sia lo scope
            elencoCitta: "=?",
         */
          ciao: "=saluto"
      },
      controller: "cityListCtrl",
      controllerAs: "cityListCtrl"
  })
     .controller('cityListCtrl', ['$scope', 'elencoCitta', function ($scope, elencoCitta) {
         var vm = this;
         console.log(vm.ciao);
         console.log(vm.elencoCitta)
     }])
  ; 