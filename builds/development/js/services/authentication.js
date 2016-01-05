/**
 * Created by Angga on 1/5/2016.
 */

app.factory('Authentication', function($location, FIREBASE_URL){
    var ref = new Firebase(FIREBASE_URL);

    return {
        login: function($scope) {
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
        },
        logout: function(){
            ref.unauth();
        }
    };
});