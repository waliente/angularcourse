angular.module("app.cardListComponent", [])
  .component("cardList", {
    restrict: "E",
    templateUrl: "./shared/components/cardList/cardList.html",
    bindings: {},
    controller: "cardListCtrl",
    controllerAs: "cardListCtrl"
  })


  .controller('cardListCtrl', ['$scope', 'elencoCarte', function ($scope, elencoCarte) {
    var vm = this;

    var diceIcons = {
      ranged: 'RD',
      melee: 'MD',
      focus: 'F',
      discard: 'Dc',
      disrupt: 'Dr',
      resource: 'R',
      special: 'Sp',
      shield: 'Sh',
      blank: '-'
    };


    elencoCarte.getAll()
    /*Successo (success)*/
      .then(function (res) {
        console.log(res);
        vm.elencoCarte = res.data;

        $scope.filtraSides = function (data) {
          if (data) {

            var newData = data.map(function (el, index) {

              var output = el;
              var hasIcon = 0;

              angular.forEach(diceIcons, function (value, key) {

                if (hasIcon === 0 && el.includes(value)) {
                  hasIcon = 1;
                  output = el.replace(value, key);
                  console.log(output); // un errore è qui in quanto stampi con tutto il numero. Dovresti rimuovere il primo carattere. Ma poi devi fare attenzione perchè a volte il primo carattere della
                  // stringa è un + e non il numero. Ti lascio il log cosi vedi.
                  return output;
                }
              });

              return output
            });

            return newData;
          }
        };


      })
      /*Errore (error)*/
      .catch(function () {
        alert("Si è verificato un errore!");
      });
  }])
;