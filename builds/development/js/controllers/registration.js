/**
 * Created by Angga on 1/5/2016.
 */
app.controller('RegistrationController', function($scope, $location){
    $scope.login = function(){
        $location.path('/meetings');
    }

    $scope.register = function(){
        $location.path('/meetings');
    }
});