/**
 * Created by Angga on 1/5/2016.
 */
var app = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html'
        })
        .when('/register', {
            templateUrl: 'views/register.html'
        })
        .when('/meetings', {
            templateUrl: 'views/meetings.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);