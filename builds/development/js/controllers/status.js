/**
 * Created by Angga on 1/5/2016.
 */

app.controller('StatusController', function($scope, $location, FIREBASE_URL, Authentication){
    var ref = new Firebase(FIREBASE_URL);
    var authData = ref.getAuth();
    if (authData) {
        $scope.userEmail = authData.password.email;
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
    } else {
        $location.path('/login');
        console.log("User is logged out");
    }

    $scope.logout = function(){
        Authentication.logout();
        $scope.userEmail = null;
    }
});