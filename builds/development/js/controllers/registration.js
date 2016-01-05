/**
 * Created by Angga on 1/5/2016.
 */
app.controller('RegistrationController', function($scope, $location, Authentication){
    var ref = new Firebase('https://attendence-angular.firebaseio.com/meetings');
    var authData = ref.getAuth();
    if (authData) {
        $location.path('/meetings');
    }

    $scope.login = function(){
        Authentication.login($scope);
    }

    $scope.register = function(){
        Authentication.register($scope);
    }
});