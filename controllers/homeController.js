//Declaration of homecontroller
this.myApp.controller('homeController',['$scope','$location', '$log','$route',
function($scope,$location,$log,$route){
// homePics array declared to store movie informations
    var homePics =[
     {
        id: 1,
        name: "Frozen",
        path:"pics/frozen.jpg",
        url:"details.html"
        
    },
    
    {
        id: 2,
        name: "Finding Nemo",
        path:"pics/nemo.jpg",
        url:"details.html"

    },
    {
        id: 3,
        name: "Rio",
        path:"pics/rio.jpg",
        url:"details.html"

    },
    {
        id: 4,
        name: "Lon King",
        path:"pics/lion.jpg",
        url:"details.html"

    },
    {
        id: 5,
        name: "Ice Age",
        path:"pics/ice.jpg",
        url:"details.html"
    },
    
    {
        id: 6,
        name: "Tarzan",
        path:"pics/jungle.jpg",
        url:"details.html"

    },
    {
        id: 7,
        name: "Kung Fu Panda",
        path:"pics/kung.jpg",
        url:"details.html"
    },
    {
        id: 8,
        name: "Wreck It Ralph",
        path:"pics/ralph.jpg",
        url:"details.html"
    },
    
    ];

    $scope.homePics=homePics; //Stores array value to scope array homePics
 
    //function to show the path in the browser with movie id
    $scope.myMovie = function(id)
    {
        $location.path('details/'+id);  // show the id in browser
    }
}]);// End of home Controller