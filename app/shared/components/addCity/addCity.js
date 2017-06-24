angular.module("app.addCityComponent", []) 
  .directive("addCity", function() { 
    return { 
      restrict: "E",
      templateUrl: "./shared/components/addCity/addCity.html",
/*      link: function(scope, elements, attributes){
          
      }*/
    }; 
  }); 