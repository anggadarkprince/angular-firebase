/**
 * Created by Angga on 1/5/2016.
 */
app.controller('RegistrationController', function($scope, $location, Authentication){
    var ref = new Firebase('https://attendence-angular.firebaseio.com/meetings');

    $scope.login = function(){
        Authentication.login($scope);
    }

    $scope.register = function(){
        ref.createUser({
            email    : $scope.user.email,
            password : $scope.user.password
        }, function(error, userData) {
            if (error) {
                $scope.message = error.toString();
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
                $location.path('/login');
            }
        });
    }
});