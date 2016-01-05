/**
 * Created by Angga on 1/5/2016.
 */

app.factory('Authentication', function($location, $firebaseAuth, FIREBASE_URL){
    var ref = new Firebase(FIREBASE_URL);

    return {
        register: function($scope){
            ref.createUser({
                email    : $scope.user.email,
                password : $scope.user.password
            }, function(error, userData) {
                if (error) {
                    $scope.message = error.toString();
                    console.log("Error creating user:", error);
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                    $scope.message = "You have successfully registered";
                    $location.path('/login');
                }
            });
        },
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
                    $location.path('/meetings');
                }
            });

            ref.onAuth(function(authData){
                if (authData) {
                    console.log("User " + authData.uid + " is logged in with " + authData.provider);
                    $location.path('/meetings');
                } else {
                    console.log("User is logged out");
                    $location.path('/login');
                }
            });
        },
        logout: function(){
            ref.unauth();
            console.log('done logout');
            $location.path('/login');
        }
    };
});