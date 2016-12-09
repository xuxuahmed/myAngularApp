//Declaration of movies details controller

this.myApp.controller('detailsController',['$scope','$location','$log','$http','$route',
function($scope,$location,$log, $http,$route){
     
 // get movie_details array value to an array called response  
   $http.get("json/movie_details.json")
   .then(function (response){
      
      //stores response data to scope array details
      $scope.details=response.data;

//for loop to get details of the movie based on movie id

      angular.forEach($scope.details, function(detail){
          
          if(detail.id==$route.current.params.id)
          $scope.desc=detail;
      });
   }); // End of $http
         
}]); // End of Controller