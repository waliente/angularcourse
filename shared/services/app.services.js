angular.module("app.services", [])

.service("cardServices", function($http){

    var baseUrl = "./data/cards.json";

    return {
        getAll: function(){
            return $http.get(baseUrl)
                        
        }


    }
})


.factory("cardFactory", function(){

})

;