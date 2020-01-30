/// <reference path="C:\Users\spuser.VTSLINDIA\Desktop\sampath\AllInOne20\AllInOne20\scripts/angular.js" />

var app = angular.module("loginapp", []);
app.controller("logincontroller", function ($scope, $http, $window) {
    $scope.name = "admin";
    $scope.password = "admin";
    $scope.loginusername = "";
    $scope.loginpassowrd = "";
    $scope.AdminCheck = function () {
        if ($scope.name == $scope.loginusername && $scope.password == $scope.loginpassowrd) {
            alert("Welcoome Admin")
           $scope.loginWelcomename="Welcome Admin"
            window.location = "TotalGrid.html";
        }
        else {
            alert("Ur Not Admin")
        }
       
    }
})
