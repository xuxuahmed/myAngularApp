//****Declaration of  characterController****
this.myApp.controller('characterController',['$scope','$location','$log','$http','$route',
function($scope, $location, $log, $http, $route){   

// Retrive all the arrays in char_details Json to an array called response   
   $http.get("json/char_details.json")
        .then(function (response){       
      $scope.details=response.data;  // all data is pushed to a scope array details

//listArrays to store only the names of characters 
      var listArray=[]; 

//forloop to get the name from details array and store it in listArray 
      angular.forEach($scope.details, function(detail)
      {     
        listArray.push(detail.name);      
      });// End of for Each list Array

     $scope.charArray=listArray;  // charArray decalared to store the values of character name
      
     $scope.addChar = function(name) // Add new characters to listArray 
     {       
       listArray.push(name);
       $scope.name="";                  
     }

     $scope.deleteRecord = function(name) // Delete a character from listArray
     {       
       listArray.splice(name,1); 
     }

     $scope.editRecord = function(key,edit_name) // Edit and update character name 
     {       
       $scope.current= edit_name; 
       $scope.id = key;      //store the array indes in id
     }

     $scope.saveRecord = function(key,name) // Add new characters 
     {
       listArray[key] = name;      //update the listArray with new name
       $scope.current = "";       //empty the current 
     }
 
   });// End of $http        
}]); // Enf of character controller
