'use strict';

angular.module('app.sidebar', [])
    .component("sideBar", {
        restrict: "E",
        templateUrl: "./shared/components/sidebar/sidebar.html",
        bindings: {},
        controller: "sidebarCtrl",
        controllerAs: "sidebarCtrl"
    })
    .controller('sidebarCtrl', ['elencoCategorie', function (elencoCategorie) {

        var vm = this;

        elencoCategorie.getCategories()
            .then(function (res) {
                console.log(res);
                
                vm.categories = res.data;


            })
            .catch(function () {
                alert("errore chiamata getCategories");
            })

    }]);