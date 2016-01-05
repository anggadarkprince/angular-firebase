/**
 * Created by Angga on 1/5/2016.
 */
var app = angular.module('myApp', ['ngRoute', 'firebase', 'appControllers'])
    .constant('FIREBASE_URL', 'https://attendence-angular.firebaseio.com/meetings');

var appControllers = angular.module('appControllers', ['firebase']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'RegistrationController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegistrationController'
        })
        .when('/meetings', {
            templateUrl: 'views/meetings.html',
            controller: 'MeetingsController'
        })
        .otherwise({
            redirectTo: '/login'
        });
}]);