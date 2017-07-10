angular.module('catService', [])

    .service('elencoCategorie', function ($http) {
       return {
           getCategories: function(){
               return $http.get("./data/elencoCategorie.json")
           }
       }

    });