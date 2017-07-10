angular.module('prodottiServices', [])

    .service('elencoProdotti', function ($http) {
       return {
           getAll: function(){
               return $http.get("./data/elencoProdotti.json")
           },
           saveAll: function(prodotto){
               return $http.post("./data/elencoProdotti.json", prodotto) 
           }
       }

    });