/// <reference path="C:\Users\spuser.VTSLINDIA\Desktop\sampath\AllInOne20\AllInOne20\scripts/angular.js" />
var app = angular.module("MypageInfo", []);
app.controller("MypageController", function ($scope,$http) {
   
    $scope.Insert = function (S) {
        alert("Hi");
        $http({
            method: "POST",
            url: "/Register/Index",
            data:S,
            dataType: 'json',
            headers: { "Content-Type": "application/json" }
        })
    }
})