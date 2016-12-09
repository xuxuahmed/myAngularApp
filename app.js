var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){

$routeProvider

.when('/home', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
    })

.when('/character', {
    templateUrl: 'pages/character.html',
    controller: 'characterController'
    })

.when('/details/:id', {
    templateUrl: 'pages/details.html',
    controller: 'detailsController'
    })
});




    
         


