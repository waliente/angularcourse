angular.module('cardService', [])
   
    //ELENCO CARTE SERVICE
    .service('elencoCarte', function ($http, baseUrl) {
        return {
            getAll: function () {
                return $http.get(baseUrl.endpoint + "/cards")
            }
        }
    });