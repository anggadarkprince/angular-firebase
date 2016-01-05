/**
 * Created by Angga on 1/5/2016.
 */
app.controller('RegistrationController', function($scope, $firebaseAuth, $location){
    var ref = new Firebase('https://attendence-angular.firebaseio.com/meetings');

    $scope.login = function(){
        ref.authWithPassword({
            email    : $scope.user.email,
            password : $scope.user.password
        }, function(error, authData) {
            if (error) {
                $scope.message = error.toString();
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });

        ref.onAuth(function(authData){
            if (authData) {
                console.log("User " + authData.uid + " is logged in with " + authData.provider);
                $location.path('/meetings');
            } else {
                console.log("User is logged out");
            }
        });
    }

    $scope.register = function(){
        ref.createUser({
            email    : $scope.user.email,
            password : $scope.user.password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                $location.path('/meetings');
            }
        });
    }
});