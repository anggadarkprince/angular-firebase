/**
 * Created by Angga on 1/5/2016.
 */

app.controller('MeetingsController', function($scope, $firebaseArray){
    var ref = new Firebase('https://attendence-angular.firebaseio.com/meetings');

    $scope.meetings = $firebaseArray(ref);

    $scope.addMeeting = function(){
        $scope.meetings.$add({
            name: $scope.meetingname,
            date: Firebase.ServerValue.TIMESTAMP
        }).then(function(){
            $scope.meetingname = '';
        });
    }

    $scope.deleteMeeting = function(key){
        $scope.meetings.$remove(key);
    }
});