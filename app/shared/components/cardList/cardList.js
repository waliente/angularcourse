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

        $scope.filtraSides = function (data) {
          if (data) {

            var newData = data.map(function (el, index) {

              var output = el;
              var hasIcon = 0;

              angular.forEach(diceIcons, function (value, key) {

                if (hasIcon === 0 && el.includes(value)) {
                  hasIcon = 1;
                  var icon = `<span class="icon icon-${key}"></span>`;
                  output = el.replace(value, icon);
                  return output;
                }
              });

              return output
            });

            return newData;
          }
        };

        vm.elencoCarte = res.data;
      })
      /*Errore (error)*/
      .catch(function () {
        alert("Si è verificato un errore!");
      });
  }])
;