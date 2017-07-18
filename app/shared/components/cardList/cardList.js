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

        var diceIcons = {
            ranged: 'RD',
            melee: 'MD',
            focus: 'F',
            discard: 'Dc',
            disrupt: 'Dr',
            resource: 'R',
            special: 'Sp',
            blank: '-'
        };




        elencoCarte.getAll()
            /*Successo (success)*/
            .then(function (res) {
                console.log(res);

                $scope.filtraSides = function (data) {

                    angular.forEach(diceIcons, function (value, key) {
                        // console.log(data, value, key);
                        if(data.includes(value)){
                            var newData;
                            var icon = document.createElement('span');
                            icon.classList.add(`icon`, `icon-${key}`);

                            newData = data.replace(value, icon);
                            console.log(newData);
                        }
                        
                        return newData;
                    });
                };

                vm.elencoCarte = res.data;
            })
            /*Errore (error)*/
            .catch(function () {
                alert("Si è verificato un errore!");
            });
    }])
    ; 