angular.module("app.cardListComponent", ['ngSanitize'])
  .component("cardList", {
    restrict: "E",
    templateUrl: "./shared/components/cardList/cardList.html",
    bindings: {},
    controller: "cardListCtrl",
    controllerAs: "cardListCtrl"
  })


  .controller('cardListCtrl', ['$scope', '$sce', 'elencoCarte', function ($scope, $sce, elencoCarte) {
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

    $scope.iconSnippet = function(el) {
      return $sce.trustAsHtml(el);
    };

    $scope.filtraSides = function (data) {
      if (data) {
        // console.log(data);return;
        var newData = data.map(function (el, index) {

          var output = el;
          var hasIcon = 0;

          angular.forEach(diceIcons, function (value, key) {

            if (hasIcon === 0 && el.includes(value)) {
              hasIcon = 1;
              var icon = `<span class="icon icon-${key}"></span>`;
              output = el.replace(value, icon);
              //console.log(output);
              return output;
            }
          });

          return output;
        });

        return newData;
      }
    };

    elencoCarte.getAll()
      // on success
      .then(function (res) {
        // console.log(res);
        vm.elencoCarte = res.data;
      })
      /*Errore (error)*/
      .catch(function () {
        alert("Si è verificato un errore!");
      });
  }])
;