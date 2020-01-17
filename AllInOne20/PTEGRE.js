/// <reference path="C:\Users\spuser.VTSLINDIA\Desktop\sampath\AllInOne20\AllInOne20\scripts/angular.js" />
var app = angular.module("MypageInfo", []);
app.controller("MypageController", function ($scope, $http, $window) {
    
   
    
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
    $scope.SelectedFiles = "";
    $scope.SelectFile = function (e) {
        alert("Files");
        $window.alert(e.target.files[0]);
        $scope.SelectedFiles = e.target.files[0];
        console.log($scope.SelectedFiles);
        $scope.S = {
            IELTSPTEImage: $scope.SelectedFiles
        }
        
    }
})