'use strict';


angular.module('App', [
    //core
    /*'app.dashboard',*/
    'app.components',
    'app.services'
])


    .config(function () {
        //interceptors

        //routing

    })


    .run(function () {
        //check guard on routes

    })


    .controller('rootController', ['$scope', 'cardServices', function ($scope, cardServices) {

        //vm = View Model
        var vm = this;
        console.log('start rootController');

        //CHIAMA CARDSERVICE
        cardServices.getAll()
            .then(function (res) {
                console.log(res.data.sets);

            })
            .catch(function (e) {
                console.log("Errore");

            })
            ;


        vm.check = false;
        /*vm.colore = "red";    */
        vm.users = [
            { name: "Andrea", surname: "Rossi", city: "Roma", phone: "39 3472417599", email: "luca.mosca@luca.it" },
            { name: "Marco", surname: "Verdi", city: "Milano", phone: "39 3472417599", email: "luca.mosca@luca.it" },
            { name: "Giovanni", surname: "Neri", city: "Napoli", phone: "39 3472417599", email: "luca.mosca@luca.it" },
            { name: "Roberto", surname: "Gialli", city: "Palermo", phone: "39 3472417599", email: "luca.mosca@luca.it" }
        ];
        vm.user = {
            name: "John",
            surname: "Doe",
            age: 18,
        };
        vm.greetings = function () {
            return "Goodmorning " +
                vm.user.name + " " +
                vm.user.surname + "!"
        };
        vm.sortByRegione = function (name) {
            $scope.filtro = name;
        };
        $scope.elencoCitta = [
            { codice: "RM", nome: "Roma", regione: "Lazio" },
            { codice: "LT", nome: "Latina", regione: "Lazio" },
            { codice: "MI", nome: "Milano", regione: "Lombardia" },
            { codice: "NA", nome: "Napoli", regione: "Campania" },
            { codice: "CO", nome: "Como", regione: "Lombardia" },
            { codice: "PA", nome: "Palermo", regione: "Sicilia" },
            { codice: "CA", nome: "Caserta", regione: "Campania" },
            { codice: "AV", nome: "Avellino", regione: "Campania" },
            { codice: "TP", nome: "Trapani", regione: "Sicilia" },
            { codice: "AG", nome: "Agrigento", regione: "Sicilia" }
        ];
        //NG INIT / NG CHANGE - RISOLVERE 
        $scope.selectedItem = $scope.elencoCitta[0].nome;
        console.log(vm.user);
        //NG INIT / NG CHANGE - RISOLVERE 
        vm.dataOra = Date.now();

    }]);