/**
 * Created by jason on 7/7/2016.
 */
var app = angular.module('doseecraftApp', []);
app.controller('craftitemsCtrl', function($scope, $http) {
    $http.get("doseecraftitems.json").then(function(response) {
        $scope.myData = response.data.records;
    });
});