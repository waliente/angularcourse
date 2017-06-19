angular.module('cittaServices', [])

    .service('elencoCitta', function ($http) {
       return {
           getAll: function(){
               return $http.get("./data/elencoCitta.json")
           },
           saveAll: function(citta){
               return $http.post("./data/elencoCitta.json", citta) 
           }
       } 

        this.aggiungi = function (citta) {
            console.log("cittaServices" + citta);
            this.elenco.unshift(citta);
        };
    });