angular.module('cardService', [])

    .service('elencoCarte', function ($http) {
       return {
           getAll: function(){
               return $http.get("./data/elencoCarte.json")
           },
           saveAll: function(prodotto){
               return $http.post("./data/elencoCarte.json", prodotto) 
           }
       }

    });