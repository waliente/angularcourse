angular.module("app.cardListComponent", [])
    .component("cardList", {
        restrict: "E",
        templateUrl: "./shared/components/cardList/cardList.html",
        bindings: {
        },
        controller: "cardListCtrl",
        controllerAs: "cardListCtrl"
    })



    .controller('cardListCtrl', ['$scope', 'elencoCarte', function ($scope, elencoCarte) {
        var vm = this;


        elencoCarte.getAll()
            /*Successo (success)*/
            .then(function (res) {
                console.log(res);
                vm.elencoCarte = res.data;
            })
            /*Errore (error)*/
            .catch(function () {
                alert("Si è verificato un errore!");
            });
    }])
    ; 